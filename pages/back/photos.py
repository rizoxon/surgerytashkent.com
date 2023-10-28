import os
import datetime

from main import app, request, render_template
from python.modules.pageGuard import pageGuard
from python.modules.Globals import Globals
from python.modules.MySQL import MySQL
from python.modules.response import response
from python.modules.FileSystem import FileSystem

@app.route("/photos", methods=["GET", "POST"])
# @pageGuard("labeledPhoto")
def Photos():
    if request.method == "GET": pass

    elif request.method == "POST":
        ############################## JSON
        if request.content_type == "application/json":
            
            if request.get_json()["for"] == "getAllPhotos":
                data = MySQL.execute("SELECT * FROM photos")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllVideos":
                data = MySQL.execute("SELECT * FROM videos")

                if data is False: return response(type="error",message="databaseError")

                return response(type="success",message="success",data=data)

            if request.get_json()["for"] == "getAllDoctors":
                data = MySQL.execute("SELECT * FROM doctors")

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
