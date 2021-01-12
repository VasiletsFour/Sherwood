from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from db.connect.connect import connectDd
from resourse.controller.Season import Season
from resourse.controller.League import League
from common.marshmallow.marshmallow import create_ma
from flask_migrate import Migrate


def create_app():
    app = Flask(__name__)

    app.config.from_object('config.Config')
    app.url_map.strict_slashes = False

    api = Api(app)

    db = connectDd(app)
    create_ma(app)
    CORS(app)
    Migrate(app, db)

    api.add_resource(Season, "/api/season/")
    api.add_resource(League, "/api/league/")

    return app
