import logging

from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api

from db.connect.connect import connectDd
from resourse.controller.AdminMatch import AdminMatch
from resourse.controller.Account import Account
from resourse.controller.AdminBlogs import AdminBlogs
from resourse.controller.AdminLeague import AdminLeague
from resourse.controller.AdminPlace import AdminPlace
from resourse.controller.AdminPlayer import AdminPlayer
from resourse.controller.AdminReferee import AdminReferee
from resourse.controller.AdminResult import AdminResult
from resourse.controller.AdminSeasone import AdminSeason
from resourse.controller.AdminTeams import AdminTeam
from resourse.controller.AdminTimeTable import AdminTimeTable
from resourse.controller.AdminUser import AdminUser
from resourse.controller.Blogs import Blogs
from resourse.controller.League import League
from resourse.controller.Login import Login
from resourse.controller.Player import Player
from resourse.controller.Referee import Referee
from resourse.controller.Result import Result
from resourse.controller.Season import Season
from resourse.controller.SignUp import SignUp
from resourse.controller.Team import Team
from resourse.controller.TimeTable import TimeTable
from resourse.controller.TournamentTable import TournamentTable
from utils.bcrypt.bcrypt import bcrypt

migrate = Migrate()


def create_app():
    app = Flask(__name__)

    logging.basicConfig(filename="log.log", level="INFO")

    CORS(app, supports_credentials=True)
    app.config.from_object('config.Config')
    app.url_map.strict_slashes = False

    api = Api(app, prefix="/api")
    db = connectDd(app)

    Migrate(app, db)
    migrate.init_app(app, db, render_as_batch=True)
    bcrypt.init_app(app)

    with app.app_context():
        if db.engine.url.drivername == 'sqlite':
            migrate.init_app(app, db, render_as_batch=True)
        else:
            migrate.init_app(app, db)

    # open routes
    api.add_resource(Season, "/season/")
    api.add_resource(League, "/league/")
    api.add_resource(Team, "/team/")
    api.add_resource(Player, "/player/")
    api.add_resource(SignUp, "/auth/signUp/", "/auth/confirm/<string:token>")
    api.add_resource(Login, "/auth/login/")
    api.add_resource(Blogs, "/blogs/")
    api.add_resource(Referee, "/referee/")
    api.add_resource(Result, "/result/")
    api.add_resource(TimeTable, "/time_table/")
    api.add_resource(TournamentTable, "/tournament_table/")

    # private routes
    api.add_resource(Account, "/account")

    # admin routes
    api.add_resource(AdminBlogs, "/admin/blogs/", "/admin/blogs/<string:id>")
    api.add_resource(AdminTeam, "/admin/team/", "/admin/team/<string:id>")
    api.add_resource(AdminLeague, "/admin/league/", "/admin/league/<string:id>")
    api.add_resource(AdminPlayer, "/admin/player/", "/admin/player/<string:id>")
    api.add_resource(AdminSeason, "/admin/season/", "/admin/season/<string:id>")
    api.add_resource(AdminUser, "/admin/user/", "/admin/user/<string:id>")
    api.add_resource(AdminMatch, "/admin/match/")
    api.add_resource(AdminReferee, "/admin/referee/", "/admin/referee/<string:id>")
    api.add_resource(AdminTimeTable, "/admin/time_table/", "/admin/time_table/<string:id>")
    api.add_resource(AdminPlace, "/admin/place/", "/admin/place/<string:id>")
    api.add_resource(AdminResult, "/admin/result", "/admin/result/<string:id>")

    return app
