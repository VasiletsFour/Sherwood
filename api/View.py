from flask_restful import Api

from resourse.controller.Account import Account
from resourse.controller.AdminBlogs import AdminBlogs
from resourse.controller.AdminLeague import AdminLeague
from resourse.controller.AdminMatch import AdminMatch
from resourse.controller.AdminPlace import AdminPlace
from resourse.controller.AdminPlayer import AdminPlayer
from resourse.controller.AdminReferee import AdminReferee
from resourse.controller.AdminResult import AdminResult
from resourse.controller.AdminScorer import AdminScorer
from resourse.controller.AdminSeasone import AdminSeason
from resourse.controller.AdminTeams import AdminTeam
from resourse.controller.AdminTimeTable import AdminTimeTable
from resourse.controller.AdminUser import AdminUser
from resourse.controller.ApplicationList import ApplicationList
from resourse.controller.Blogs import Blogs
from resourse.controller.ConfirmEmail import ConfirmEmail
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


class View:
    def __init__(self, app):
        self.api = Api(app, prefix="/api")

    def get_view(self):
        # open routes
        self.api.add_resource(Season, "/season/")
        self.api.add_resource(League, "/league/")
        self.api.add_resource(Team, "/team/")
        self.api.add_resource(Player, "/player/")
        self.api.add_resource(SignUp, "/auth/signUp/")
        self.api.add_resource(Login, "/auth/login/")
        self.api.add_resource(ConfirmEmail, "/auth/confirm/", "/auth/confirm/<string:token>")
        self.api.add_resource(Blogs, "/blogs/")
        self.api.add_resource(Referee, "/referee/")
        self.api.add_resource(Result, "/result/")
        self.api.add_resource(TimeTable, "/time_table/")
        self.api.add_resource(TournamentTable, "/tournament_table/")
        self.api.add_resource(ApplicationList, "/application_list/")

        # private routes
        self.api.add_resource(Account, "/account")

        # admin routes
        self.api.add_resource(AdminBlogs, "/admin/blogs/", "/admin/blogs/<string:id>")
        self.api.add_resource(AdminTeam, "/admin/team/", "/admin/team/<string:id>")
        self.api.add_resource(AdminLeague, "/admin/league/", "/admin/league/<string:id>")
        self.api.add_resource(AdminPlayer, "/admin/player/", "/admin/player/<string:id>")
        self.api.add_resource(AdminSeason, "/admin/season/", "/admin/season/<string:id>")
        self.api.add_resource(AdminUser, "/admin/user/", "/admin/user/<string:id>")
        self.api.add_resource(AdminMatch, "/admin/match/")
        self.api.add_resource(AdminReferee, "/admin/referee/", "/admin/referee/<string:id>")
        self.api.add_resource(AdminTimeTable, "/admin/time_table/", "/admin/time_table/<string:id>")
        self.api.add_resource(AdminPlace, "/admin/place/", "/admin/place/<string:id>")
        self.api.add_resource(AdminResult, "/admin/result/", "/admin/result/<string:id>")
        self.api.add_resource(AdminScorer, "/admin/scorer/", "/admin/scorer/<string:id>")
