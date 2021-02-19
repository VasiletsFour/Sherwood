import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.AdminSeasoneServices import AdminSeasonServices


class AdminSeason(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminSeasonServices()

    @common.middleware.admin.login_admin
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
