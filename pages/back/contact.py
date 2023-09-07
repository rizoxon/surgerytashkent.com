from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response

@app.route("/contact", methods=["GET", "POST"])
@pageGuard("contact")
def contact():
    if request.method == "GET": return render_template("index.html", **globals())

    elif request.method == "POST":
        ############################## FORM
        if "multipart/form-data" in request.content_type.split(';'):
            if request.form["for"] == "sendComment":
                if "fullName" not in request.form or not request.form['fullName']: 
                    return response(type="error", field="fullName", message="fieldEmpty")
                if "phoneNumber" not in request.form or not request.form['phoneNumber']: 
                    return response(type="error", field="phoneNumber", message="fieldEmpty")


                res = MySQL.execute(
                    sql = "INSERT INTO comments (fullName, phoneNumber, comment) VALUES (%s, %s, %s)",
                    params = (request.form["fullName"], request.form['phoneNumber'], request.form['comment']),
                    commit = True
                )
                print(MySQL.getLastQuery())
                print(2)

                if res is False:
                    print(3)
                    return response(type="error",message="databaseError", toast=True)

                # Success
                print(4)
                return response(type="success",message="saved", toast=True)

        ############################## JSON
        if request.content_type == "application/json":
            if request.get_json()["for"] == "getAllPhotos":
                photos = MySQL.execute(
                    sql="SELECT * FROM photos"
                )

                if data == False: return response(type="error", message="databaseError")

                # Success
                return response(type="success",message="success",data=data)
