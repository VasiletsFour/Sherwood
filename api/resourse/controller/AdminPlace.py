from resourse.controller.Controller import Controller
from resourse.services.AdminPlaceServices import AdminPlaceServices
from utils.middleware.middleware import admin_login


class AdminPlace(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminPlaceServices()

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

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service.message, service.status
