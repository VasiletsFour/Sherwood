from flask_restful import request

import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.AdminUserServices import AdminUserServices


class AdminUser(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminUserServices()

    @common.middleware.admin.login_admin
    def get(self):
        service = self.service.get()

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, request.get_json())

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
