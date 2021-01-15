from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api

from common.marshmallow.marshmallow import create_ma
from db.connect.connect import connectDd
from resourse.controller.League import League
from resourse.controller.Season import Season
from resourse.controller.Team import Team

migrate = Migrate()


def create_app():
    app = Flask(__name__)

    app.config.from_object('config.Config')
    app.url_map.strict_slashes = False

    api = Api(app, prefix="/api")

    db = connectDd(app)

    create_ma(app)
    CORS(app)
    Migrate(app, db)
    migrate.init_app(app, db)

    api.add_resource(Season, "/season/", "/season/admin/", "/season/admin/<string:id>")
    api.add_resource(League, "/league/<string:id>", "/league/admin/", "/league/admin/<string:id>")
    api.add_resource(Team, "/team/", "/team/admin/", "/team/admin/<string:id>")

    return app
