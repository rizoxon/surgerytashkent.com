from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response

@app.route("/", methods=["GET", "POST"])
@app.route("/home", methods=["GET", "POST"])
@pageGuard("home")
def home():
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

                if res is False:
                    return response(type="error",message="databaseError", toast=True)

                # Success
                return response(type="success",message="saved", toast=True)