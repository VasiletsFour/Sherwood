from db.models.TeamModel import Team
from resourse.repositories.TeamRepositories import TeamRepositories
from resourse.services.Services import Services


class TeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TeamRepositories()

    def get(self, name: str = None, league_id: str = None):
        filters = True

        if name or league_id:
            filters = (Team.league_id == league_id) | (Team.name == name)

        return self.repository.get(filters)
