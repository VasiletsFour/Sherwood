from resourse.repositories.TeamRepositories import TeamRepositories
from resourse.services.Services import Services


class TeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TeamRepositories()

    def get(self, **kwargs):
        return self.repository.get(kwargs["kind"], kwargs["type"], kwargs["league_id"])
