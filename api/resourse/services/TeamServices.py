from db.models.TeamModel import Team
from resourse.repositories.TeamRepositories import TeamRepositories
from resourse.services.Services import Services


class TeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TeamRepositories()

    def get(self, **kwargs):
        filters = True
        order = Team.league_id

        if kwargs["kind"] == "asc":
            if kwargs["type"] == "name": order = Team.name
            if kwargs["type"] == "league_id": order = Team.league_id

        if kwargs["kind"] == "desc":
            if kwargs["type"] == "name": order = Team.name.desc()
            if kwargs["type"] == "league_id": order = Team.league_id.desc()

        if kwargs["name"] or kwargs["league_id"]:
            filters = (Team.league_id == kwargs["name"]) | (Team.name == kwargs["name"])

        return self.repository.get(filters, order)
