from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resourse.controller.controller import Season
from db.connect.connect import connectDd
from common.marshmallow.marshmallow import create_ma


def create_app():
    app = Flask(__name__)

    app.config.from_object('config.Config')
    app.url_map.strict_slashes = False

    api = Api(app)

    create_ma(app)
    CORS(app)
    connectDd(app)

    api.add_resource(Season, "/api/season/")

    return app
