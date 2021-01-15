import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.LeagueServices import LeagueServices


class League(Controller):
    def __init__(self):
        super().__init__()
        self.service = LeagueServices()

    def get(self, id):
        print(id)
        service = self.service.get(id)

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
