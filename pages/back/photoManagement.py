from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response

@app.route("/photoManagement", methods=["GET", "POST"])
@pageGuard("photoManagement")
def photoManagement():
    if request.method == "GET": return render_template("index.html", **globals())

    elif request.method == "POST":
        ############################## FORM
        if "multipart/form-data" in request.content_type.split(';'):
            if request.form["for"] == "uploadPhoto":
                if "file_name" not in request.form: return response(type="error", field="file_name", message="fieldEmpty")

                # Success
                return response(type="success",message="saved")

        ############################## JSON
        if request.content_type == "application/json":
            if request.get_json()["for"] == "getAllPhotos":
                photos = MySQL.execute(
                    sql="SELECT * FROM photos"
                )

                if data == False: return response(type="error", message="databaseError")

                # Success
                return response(type="success",message="success",data=data)
