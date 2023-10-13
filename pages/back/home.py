from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response

@app.route("/", methods=["GET"])
@app.route("/home", methods=["GET"])
@pageGuard("home")
def home():
    if request.method == "GET": return render_template("index.html", **globals())