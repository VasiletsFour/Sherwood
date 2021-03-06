from resourse.controller.Controller import Controller
from resourse.services.AdminMatchServices import AdminMatchServices
from middleware.Middleware import admin_login


class AdminMatch(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminMatchServices()

    @admin_login
    def get(self):
        service = self.service.get(self.team_one, self.team_two)

        return service.message, service.status
