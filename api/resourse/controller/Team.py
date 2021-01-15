import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.TeamServices import TeamServices


class Team(Controller):
    def __init__(self):
        super().__init__()
        self.service = TeamServices()

    def get(self, *args, **kwargs):
        service = self.service.get(self.name, self.league_id)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
