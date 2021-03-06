from middleware.Middleware import admin_login
from resourse.controller.Controller import Controller
from resourse.services.AdminUserServices import AdminUserServices


class AdminUser(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminUserServices()

    @admin_login
    def get(self):
        service = self.service.get(self.token, search=self.search, sortBy=self.sortBy, kind=self.kind)

        return service.message, service.status

    @admin_login
    def put(self, id):
        service = self.service.put(id, self.body)

        return service.message, service.status

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service.message, service.status
