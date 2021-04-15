from resourse.controller.Controller import Controller
from resourse.services.AdminTeamService import AdminTeamServices
from utils.middleware.middleware import admin_login


class AdminTeam(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminTeamServices()

    @admin_login
    def get(self):
        service = self.service.get()

        return service.message, service.status

    @admin_login
    def post(self):
        service = self.service.post(self.body)

        return service.message, service.status

    @admin_login
    def put(self, id=None):
        service = self.service.putUpdateName(id, self.body) if id else self.service.put(self.body)

        return service.message, service.status

    @admin_login
    def delete(self, id):
        service = self.service.deleteFromLeague(id) if self.delFromLeague else self.service.delete(id)

        return service.message, service.status
