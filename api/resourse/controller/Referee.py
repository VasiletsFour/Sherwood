from resourse.controller.Controller import Controller
from resourse.services.RefereeServices import RefereeServices


class Referee(Controller):
    def __init__(self):
        super().__init__()
        self.service = RefereeServices()

    def get(self, *args, **kwargs):
        service = self.service.get()

        return service.message, service.status
