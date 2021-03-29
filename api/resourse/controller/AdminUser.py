from flask_restful import request

from utils.middleware.middleware import admin_login
from resourse.controller.Controller import Controller
from resourse.services.AdminUserServices import AdminUserServices


class AdminUser(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminUserServices()

    @admin_login
    def get(self):
        service = self.service.get(self.token)

        return service['message'], service["status"]

    @admin_login
    def put(self, id):
        service = self.service.put(id, request.get_json())

        return service['message'], service["status"]

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
