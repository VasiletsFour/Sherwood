from resourse.controller.Controller import Controller
from resourse.services.AdminSeasoneServices import AdminSeasonServices
from utils.middleware.middleware import admin_login


class AdminSeason(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminSeasonServices()

    @admin_login
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service.message, service.status

    @admin_login
    def put(self, id):
        service = self.service.put(id, self.body)

        return service.message, service.status

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service.message, service.status
