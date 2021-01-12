# noinspection PyProtectedMember
from flask_restful import Resource, request
from common.middleware.admin import login_admin
from resourse.services.LeagueServices import LeagueServices


class League(Resource):
    def __init__(self):
        self.service = LeagueServices()
        self.body = request.get_json()

    def get(self):
        service = self.service.get()

        return service['message'], service["status"]

    @login_admin
    def post(self):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @login_admin
    def put(self):
        id = request.args.get("id")
        service = self.service.put(id, self.body)

        return service['message'], service["status"]

