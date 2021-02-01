from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api

from common.bcrypt.bcrypt import bcrypt
from db.connect.connect import connectDd
from resourse.controller.Account import Account
from resourse.controller.AdminBlogs import AdminBlogs
from resourse.controller.AdminLeague import AdminLeague
from resourse.controller.AdminPlayer import AdminPlayer
from resourse.controller.AdminSeasone import AdminSeason
from resourse.controller.AdminTeams import AdminTeam
from resourse.controller.Blogs import Blogs
from resourse.controller.League import League
from resourse.controller.Login import Login
from resourse.controller.Player import Player
from resourse.controller.Season import Season
from resourse.controller.SignUp import SignUp
from resourse.controller.Team import Team

migrate = Migrate()


def create_app():
    app = Flask(__name__)

    app.config.from_object('config.Config')
    app.url_map.strict_slashes = False

    api = Api(app, prefix="/api")

    db = connectDd(app)

    Migrate(app, db)
    migrate.init_app(app, db, render_as_batch=True)
    bcrypt.init_app(app)

    @app.after_request
    def after_request(response):
        response.headers.add('Content-Type', 'application/json')
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Expose-Headers', 'Content-Type,Content-Length,Authorization,X-Pagination')

        return response

    with app.app_context():
        if db.engine.url.drivername == 'sqlite':
            migrate.init_app(app, db, render_as_batch=True)
        else:
            migrate.init_app(app, db)

    @app.before_first_request
    def create_tables():
        # from db.models.PlayerModel import Players
        # from db.models.TeamModel import Team
        # from db.models.SeasonsModel import Seasons
        # from db.models.PlayerStatisticsModel import PlayersStatistics
        # from db.models.TeamStatistics import TeamStatistics
        # from db.models.TimeTableModel import TimeTables
        # from db.models.LeagueModel import Leagues
        # from db.models.UserModel import Users
        # from db.models.BlogModel import Blogs

        db.create_all()
        db.session.commit()

    api.add_resource(Season, "/season/")
    api.add_resource(League, "/league/<int:id>")
    api.add_resource(Team, "/team/")
    api.add_resource(Player, "/player/")
    api.add_resource(SignUp, "/auth/signUp/", "/auth/confirm/<string:token>")
    api.add_resource(Login, "/auth/login")
    api.add_resource(Blogs, "/blogs/")

    # private routes
    api.add_resource(Account, "/account")

    # admin routes
    api.add_resource(AdminBlogs, "/admin/blogs/", "/admin/blogs/<string:id>")
    api.add_resource(AdminTeam, "/admin/team/", "/admin/team/<string:id>")
    api.add_resource(AdminLeague, "/admin/league", "/admin/league/<string:id>")
    api.add_resource(AdminPlayer, "/admin/player", "/admin/player/<string:id>")
    api.add_resource(AdminSeason, "/admin/season/", "/admin/season/<string:id>")

    return app
