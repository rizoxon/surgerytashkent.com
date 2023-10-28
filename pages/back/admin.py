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
                
                ######## Type
                # No Type In The Request
                if "type" not in request.form or not request.form['type']:
                    return response(type="error", field="title", message="fieldEmpty")

                ######## Title
                # No Title In The Request
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
                if file_ext not in [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]:
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
                    sql = "INSERT INTO photos (title, type, file) VALUES (%s, %s, %s)",
                    params = (request.form["title"], request.form["type"], file_name),
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

                if "type" not in request.form or not request.form['type']:
                    return response(type="error", field="title", message="fieldEmpty")

                update = MySQL.execute(
                    sql="UPDATE photos SET title = %s, type = %s  WHERE id=%s;",
                    params=(request.form['title'], request.form['type'], request.form['photoID']),
                    commit=True
                )

                if update is False: return response(type="error",message="databaseError")

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

            if request.form["for"] == "saveVideo":
                
                ######## Type
                # No Type In The Request
                if "iframe" not in request.form or not request.form['iframe']:
                    return response(type="error", field="title", message="fieldEmpty")

                ######## Title
                # No Title In The Request
                if "type" not in request.form or not request.form['type']:
                    return response(type="error", field="title", message="fieldEmpty")

                res = MySQL.execute(
                    sql = "INSERT INTO videos (iframe, type) VALUES (%s, %s)",
                    params = (request.form["iframe"], request.form["type"]),
                    commit = True
                )

                if res is False: return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])
            
            if request.form["for"] == "deleteVideo":
                
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM videos WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

            if request.form["for"] == "saveDoctor":
                
                ######## Type
                # No Type In The Request
                if "fullname" not in request.form or not request.form['fullname']:
                    return response(type="error", field="title", message="fieldEmpty")

                ######## Title
                # No Title In The Request
                if "info" not in request.form or not request.form['info']:
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
                if file_ext not in [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]:
                    return response(
                        type="error",
                        message="invalidFile",
                        field="file"
                    )

                # surgery_tashkent_ + timestamp + _ + Extension
                file_name = "doctor_" + str(datetime.datetime.now()) + "_" + file_ext

                # In Flask, the save() method of the uploaded file object returns None if the file was saved
                if request.files["file"].save(f"{Globals.X_RUNNING_FROM}/assets/doctors/{file_name}") is not None:
                    return response(type="error", message="couldNotSaveFile", toast=True)

                res = MySQL.execute(
                    sql = "INSERT INTO doctors (fullname, info, file) VALUES (%s, %s, %s)",
                    params = (request.form["fullname"], request.form["info"], file_name),
                    commit = True
                )

                if res is False: return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])

            if request.form["for"] == "updateDoctor":
                if "doctorID" not in request.form or not request.form['doctorID']:
                    return response(type="error", message="unkownError")

                if "fullname" not in request.form or not request.form['fullname']:
                    return response(type="error", field="title", message="fieldEmpty")

                update = MySQL.execute(
                    sql="UPDATE doctors SET fullname = %s, info = %s  WHERE id=%s;",
                    params=(request.form['fullname'], request.form['info'], request.form['doctorID']),
                    commit=True
                )

                if update is False: return response(type="error",message="databaseError")

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])

            if request.form["for"] == "deleteDoctor":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                file_name = MySQL.execute(
                    sql="SELECT file FROM doctors WHERE id = %s LIMIT 1",
                    params=(request.form['id'],),
                    fetchOne = True
                )

                if file_name is False: return response(type="error", message="databaseError", toast=True)

                # if no matching photo
                if file_name is None: return response(type="error", message="databaseError", toast=True)

                if FileSystem.deleteFile(f"{Globals.X_RUNNING_FROM}/assets/doctors/{file_name['file']}") is False:
                    return response(type="error", message="couldNotDeleteFile", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM doctors WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

            if request.form["for"] == "saveCertificate":
                
                ######## Type
                # No Type In The Request
                if "name" not in request.form or not request.form['name']:
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
                if file_ext not in [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]:
                    return response(
                        type="error",
                        message="invalidFile",
                        field="file"
                    )

                # surgery_tashkent_ + timestamp + _ + Extension
                file_name = "certificate_" + str(datetime.datetime.now()) + "_" + file_ext

                # In Flask, the save() method of the uploaded file object returns None if the file was saved
                if request.files["file"].save(f"{Globals.X_RUNNING_FROM}/assets/certificates/{file_name}") is not None:
                    return response(type="error", message="couldNotSaveFile", toast=True)

                res = MySQL.execute(
                    sql = "INSERT INTO certificates (name, file) VALUES (%s, %s)",
                    params = (request.form["name"], file_name),
                    commit = True
                )

                if res is False: return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])      

            if request.form["for"] == "deleteCertificate":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                file_name = MySQL.execute(
                    sql="SELECT file FROM certificates WHERE id = %s LIMIT 1",
                    params=(request.form['id'],),
                    fetchOne = True
                )

                if file_name is False: return response(type="error", message="databaseError", toast=True)

                # if no matching photo
                if file_name is None: return response(type="error", message="databaseError", toast=True)

                if FileSystem.deleteFile(f"{Globals.X_RUNNING_FROM}/assets/certificates/{file_name['file']}") is False:
                    return response(type="error", message="couldNotDeleteFile", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM certificates WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

            if request.form["for"] == "saveDiploma":
                
                ######## Type
                # No Type In The Request
                if "name" not in request.form or not request.form['name']:
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
                if file_ext not in [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]:
                    return response(
                        type="error",
                        message="invalidFile",
                        field="file"
                    )

                # surgery_tashkent_ + timestamp + _ + Extension
                file_name = "diploma_" + str(datetime.datetime.now()) + "_" + file_ext

                # In Flask, the save() method of the uploaded file object returns None if the file was saved
                if request.files["file"].save(f"{Globals.X_RUNNING_FROM}/assets/diplomas/{file_name}") is not None:
                    return response(type="error", message="couldNotSaveFile", toast=True)

                res = MySQL.execute(
                    sql = "INSERT INTO diplomas (name, file) VALUES (%s, %s)",
                    params = (request.form["name"], file_name),
                    commit = True
                )

                if res is False: return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])      

            if request.form["for"] == "deleteDiploma":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                file_name = MySQL.execute(
                    sql="SELECT file FROM diplomas WHERE id = %s LIMIT 1",
                    params=(request.form['id'],),
                    fetchOne = True
                )

                if file_name is False: return response(type="error", message="databaseError", toast=True)

                # if no matching photo
                if file_name is None: return response(type="error", message="databaseError", toast=True)

                if FileSystem.deleteFile(f"{Globals.X_RUNNING_FROM}/assets/diplomas/{file_name['file']}") is False:
                    return response(type="error", message="couldNotDeleteFile", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM diplomas WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

        ############################## JSON
        if request.content_type == "application/json":

            if request.get_json()["for"] == "getAllComments":

                data = MySQL.execute("SELECT * FROM comments")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllDoctors":
                
                data = MySQL.execute("SELECT * FROM doctors")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
              
            if request.get_json()["for"] == "getAllPhotos":
                
                data = MySQL.execute("SELECT * FROM photos")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
            
            if request.get_json()["for"] == "getAllVideos":
                
                data = MySQL.execute("SELECT * FROM videos")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllCertificates":
                
                data = MySQL.execute("SELECT * FROM certificates")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
          
            if request.get_json()["for"] == "getAllDiplomas":
                
                data = MySQL.execute("SELECT * FROM diplomas")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
            