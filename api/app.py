from flask import Flask
from flask_restful import Api
from resourse.Season import Season


def create_app():
    app = Flask(__name__)
    api = Api(app)

    app.config.from_object('config.Config')

    app.url_map.strict_slashes = False

    api.add_resource(Season, "/api/season/")

    return  app
