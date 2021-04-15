from resourse.controller.Controller import Controller
from resourse.services.ResultServices import ResultServices
from utils.middleware.middleware import admin_login


class Result(Controller):
    def __init__(self):
        super().__init__()
        self.service = ResultServices()

    def get(self, *args, **kwargs):
        service = self.service.get()

        return service.message, service.status

