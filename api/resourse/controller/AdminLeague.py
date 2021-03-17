from common.middleware.middleware import admin_login
from resourse.controller.Controller import Controller
from resourse.services.AdminLeagueServices import AdminLeagueServices


class AdminLeague(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminLeagueServices()

    @admin_login
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @admin_login
    def put(self):
        service = self.service.put(self.body)

        return service['message'], service["status"]

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
