import os
import datetime

from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response
from python.modules.FileSystem import FileSystem

@app.route("/admin", methods=["GET", "POST"])
@pageGuard("admin")
def admin():
    if request.method == "GET": return render_template("index.html", **globals())

    elif request.method == "POST":
        ############################## FORM
        if "multipart/form-data" in request.content_type.split(';'):
            if request.form["for"] == "savePhoto":
                if "title" not in request.form or not request.form['title']:
                    return response(type="error", field="title", message="fieldEmpty")

                ######## File
                # No File In The Request
                if "file" not in request.files:
                    return response(type="error", message="unknownError")

                # User Did Not Choose The File
                if request.files["file"].filename == '':
                    return response(type="error", message="fileWasNotChosen")

                # Getting File Extension
                file_ext = os.path.splitext(request.files["file"].filename)[1]

                # CHeck If File Is In Allowed Type
                if file_ext not in [".jpg", ".jpeg", ".png"]:
                    return response(
                        type="error",
                        message="invalidFile",
                        field="file"
                    )

                # surgery_tashkent_ + timestamp + _ + Extension
                file_name = "surgery_tashkent_" + str(datetime.datetime.now()) + "_" + file_ext

                # In Flask, the save() method of the uploaded file object returns None if the file was saved
                if request.files["file"].save(f"{Globals.X_RUNNING_FROM}/assets/photos/{file_name}") is not None:
                    return response(type="error", message="couldNotSaveFile", toast=True)

                res = MySQL.execute(
                    sql = "INSERT INTO photos (title, file) VALUES (%s, %s)",
                    params = (request.form["title"], file_name),
                    commit = True
                )

                if res is False: return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])

            if request.form["for"] == "deletePhoto":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                file_name = MySQL.execute(
                    sql="SELECT file FROM photos WHERE id = %s LIMIT 1",
                    params=(request.form['id'],),
                    fetchOne = True
                )

                if file_name is False: return response(type="error", message="databaseError", toast=True)

                # if no matching photo
                if file_name is None: return response(type="error", message="databaseError", toast=True)

                if FileSystem.deleteFile(f"{Globals.X_RUNNING_FROM}/assets/photos/{file_name['file']}") is False:
                    return response(type="error", message="couldNotDeleteFile", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM photos WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

            if request.form["for"] == "updatePhoto":
                if "photoID" not in request.form or not request.form['photoID']:
                    return response(type="error", message="unkownError")

                if "title" not in request.form or not request.form['title']:
                    return response(type="error", field="title", message="fieldEmpty")

                update = MySQL.execute(
                    sql="UPDATE photos SET title = %s WHERE id=%s;",
                    params=(request.form['title'], request.form['photoID']),
                    commit=True
                )

                if update is False: return response(type="error",message="databaseError")

                ## Labels
                # 1st delete all labels
                delete = MySQL.execute(
                    sql="DELETE FROM photos_labels WHERE photo = %s;",
                    params=(request.form["photoID"],),
                    commit=True
                )

                if delete is False: return response(type="error", message="databaseError")

                if len(request.form.getlist('labels')) > 0:
                    # Insert New/Updated Roles
                    for label in request.form.getlist('labels'):
                        labelID = MySQL.execute(
                            sql="SELECT id FROM photo_labels WHERE name=%s LIMIT 1;",
                            params=(label, ),
                            fetchOne=True,
                            dictionary=False
                        )

                        # If Returned Data Is Not None
                        if labelID:
                            # Insert To Database
                            insert = MySQL.execute(
                                sql="INSERT INTO photos_labels (photo, label) VALUES (%s, %s)",
                                params=(request.form['photoID'], labelID[0]),
                                commit=True
                            )

                            if insert is False: return response(type="error",message=f"Could Not Save The Label: {label}")

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])

            if request.form["for"] == "deleteComment":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM comments WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

        ############################## JSON
        if request.content_type == "application/json":
            if request.get_json()["for"] == "getAllPhotos":
                data = MySQL.execute(
                    sql="""
                    SELECT
                        photos.*,
                        GROUP_CONCAT(DISTINCT photo_labels.name ORDER BY photo_labels.name ASC SEPARATOR ', ') AS labels
                    FROM photos
                    LEFT JOIN photos_labels ON photos_labels.photo = photos.id
                    LEFT JOIN photo_labels ON photo_labels.id = photos_labels.label
                    GROUP BY photos.id
                    ORDER BY photos.id ASC;
                    """
                )

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllComments":
                data = MySQL.execute("SELECT * FROM comments")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllPhotosByLabel":
                data = MySQL.execute(
                    sql="""
                        SELECT photos.*
                        FROM photos
                        JOIN photos_labels ON photos_labels.photo = photos.id
                        JOIN photo_labels ON photos_labels.label = photo_labels.id
                        WHERE photo_labels.name = %s;
                    """,
                    params=(request.get_json()["label"],)
                )

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
