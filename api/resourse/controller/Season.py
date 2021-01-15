import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.SeasonSercices import SeasonServices


class Season(Controller):
    def __init__(self):
        super().__init__()
        self.service = SeasonServices()

    def get(self, *args, **kwargs):
        service = self.service.get(self.name)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, self.body)

        return service['message'], service["status"]
