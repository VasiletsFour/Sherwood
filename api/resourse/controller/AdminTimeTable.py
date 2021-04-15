from resourse.controller.Controller import Controller
from resourse.services.AdminTimeTableServices import AdminTimeTableServices
from utils.middleware.middleware import admin_login


class AdminTimeTable(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminTimeTableServices()

    @admin_login
    def get(self):
        service = self.service.get()

        return service.message, service.status

    @admin_login
    def post(self):
        service = self.service.post(self.body)

        return service.message, service.status

    @admin_login
    def put(self, id):
        service = self.service.put(id, self.body)

        return service.message, service.status
