from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api

from common.marshmallow.marshmallow import create_ma
from db.connect.connect import connectDd
from resourse.controller.League import League
from resourse.controller.Season import Season
from resourse.controller.Team import Team
from resourse.controller.Player import Player
from resourse.controller.SignUp import SignUp

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
    migrate.init_app(app, db, render_as_batch=True)

    @app.before_first_request
    def create_tables():
        from db.models.PlayerModel import Players
        from db.models.TeamModel import Team
        from db.models.SeasonsModel import Seasons
        from db.models.PlayerStatisticsModel import PlayersStatistics
        from db.models.TeamStatistics import TeamStatistics
        from db.models.TimeTableModel import TimeTables
        from db.models.LeagueModel import Leagues

        db.create_all()
        db.session.commit()

    api.add_resource(Season, "/season/", "/season/admin/", "/season/admin/<string:id>")
    api.add_resource(League, "/league/<string:id>", "/league/admin/", "/league/admin/<string:id>")
    api.add_resource(Team, "/team/", "/team/admin/", "/team/admin/<string:id>")
    api.add_resource(Player, "/player/", "/player/admin/", "/player/<string:id>", "/player/admin/<string:id>")
    api.add_resource(SignUp, "/signUp/")

    return app
