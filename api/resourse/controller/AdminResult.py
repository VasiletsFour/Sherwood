from resourse.controller.Controller import Controller
from resourse.services.AdminResultServices import AdminResultServices
from utils.middleware.middleware import admin_login


class AdminResult(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminResultServices()

    @admin_login
    def get(self, *args, **kwargs):
        service = self.service.get()

        return service['message'], service["status"]

    @admin_login
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @admin_login
    def put(self, id=None):
        service = self.service.putUpdateName(id, self.body) if id else self.service.put(self.body)

        return service['message'], service["status"]

    @admin_login
    def delete(self, id):
        service = self.service.deleteFromLeague(id) if self.delFromLeague else self.service.delete(id)

        return service['message'], service["status"]
