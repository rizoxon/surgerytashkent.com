import os
import datetime

from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response
from python.modules.FileSystem import FileSystem

@app.route("/photoManagement", methods=["GET", "POST"])
@pageGuard("photoManagement")
def photoManagement():
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

        ############################## JSON
        if request.content_type == "application/json":
            if request.get_json()["for"] == "getAllPhotos":
                data = MySQL.execute("SELECT * FROM photos")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
