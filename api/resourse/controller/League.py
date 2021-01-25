from resourse.controller.Controller import Controller
from resourse.services.LeagueServices import LeagueServices


class League(Controller):
    def __init__(self):
        super().__init__()
        self.service = LeagueServices()

    def get(self, id):
        service = self.service.get(id)

        return service['message'], service["status"]
