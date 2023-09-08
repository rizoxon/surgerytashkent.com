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
            if request.form["for"] == "savePhoto":
                if "photoName" not in request.form or not request.form['photoName']: 
                    return response(type="error", field="photoName", message="fieldEmpty")
                if "photoFile" not in request.form or not request.form['photoFile']: 
                    return response(type="error", field="photoFile", message="fieldEmpty")

                
                print(request.form["photoName"], request.form['photoFile'])
                res = MySQL.execute(
                    sql = "INSERT INTO photoManagement (photoName, photoFile) VALUES (%s, %s)",
                    params = (request.form["photoName"], request.form['photoFile']),
                    commit = True
                )

                if res is False:
                    return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True, domChange=["main"])


        ############################## FORM
        if "multipart/form-data" in request.content_type.split(';'):
            if request.form["for"] == "deletePhoto":
                if "id" not in request.form or not request.form['id']:
                    return response(type="error", message="databaseError", toast=True)

                data = MySQL.execute(
                    sql="DELETE FROM photoManagement WHERE id = %s",
                    params=(request.form['id'],),
                    commit=True
                )

                if data is False: return response(type="error", message="databaseError", toast=True)

                return response(type="success",message="deleted",toast=True, domChange=["main"])

        ############################## JSON
        if request.content_type == "application/json":
            if request.get_json()["for"] == "getAllPhotos":
                data = MySQL.execute("SELECT * FROM photoManagement")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
