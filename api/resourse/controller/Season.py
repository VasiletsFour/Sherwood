from resourse.controller.Controller import Controller
from resourse.services.SeasonSercices import SeasonServices


class Season(Controller):
    def __init__(self):
        super().__init__()
        self.service = SeasonServices()

    def get(self, *args, **kwargs):
        service = self.service.get(self.name)

        return service.message, service.status