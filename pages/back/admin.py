from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response

@app.route("/admin", methods=["GET", "POST"])
@pageGuard("admin")
def admin():
    if request.method == "GET": return render_template("index.html", **globals())

    elif request.method == "POST":
        ############################## FORM
        if "multipart/form-data" in request.content_type.split(';'):
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
            if request.get_json()["for"] == "getAllComments":
                data = MySQL.execute("SELECT * FROM comments")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)
