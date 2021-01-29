from resourse.controller.Controller import Controller
from resourse.services.TeamServices import TeamServices


class Team(Controller):
    def __init__(self):
        super().__init__()
        self.service = TeamServices()

    def get(self, *args, **kwargs):
        service = self.service.get(name=self.name, league_id=self.league_id, kind=self.kind, type=self.type)

        return service['message'], service["status"]
