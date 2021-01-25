from resourse.controller.Controller import Controller
from resourse.services.TeamServices import TeamServices


class Team(Controller):
    def __init__(self):
        super().__init__()
        self.service = TeamServices()

    def get(self, *args, **kwargs):
        service = self.service.get(self.name, self.league_id)

        return service['message'], service["status"]
