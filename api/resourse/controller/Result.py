from resourse.controller.Controller import Controller
from resourse.services.ResultServices import ResultServices


class Result(Controller):
    def __init__(self):
        super().__init__()
        self.service = ResultServices()

    def get(self):
        service = self.service.get()

        return service.message, service.status

