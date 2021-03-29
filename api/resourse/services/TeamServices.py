from db.models.TeamsModel import Teams
from resourse.repositories.TeamRepositories import TeamRepositories
from resourse.services.Services import Services


class TeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TeamRepositories()

    def get(self, **kwargs):
        filters = True
        order = Teams.league_id

        if kwargs["kind"] == "asc":
            if kwargs["type"] == "name": order = Teams.name
            if kwargs["type"] == "league_id": order = Teams.league_id

        if kwargs["kind"] == "desc":
            if kwargs["type"] == "name": order = Teams.name.desc()
            if kwargs["type"] == "league_id": order = Teams.league_id.desc()

        if kwargs["league_id"]:
            filters = (Teams.league_id == kwargs["league_id"])
            # | (Teams.name.like(kwargs["name"] + "%"))

        return self.repository.get(filters, order)
