from resourse.controller.Controller import Controller
from resourse.services.LeagueServices import LeagueServices


class League(Controller):
    def __init__(self):
        super().__init__()
        self.service = LeagueServices()

    def get(self):
        service = self.service.get(self.league_id)

        return service['message'], service["status"]
