from sqlalchemy import or_

from db.models.TeamsModel import Teams
from resourse.repositories.AdminMatchRepositories import AdminMatchRepositories
from resourse.services.Services import Services


class AdminMatchServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminMatchRepositories()

    def get(self, team_one, team_two):
        filters = or_(Teams.id == team_one, Teams.id == team_two) if team_one and team_two else True
        return self.repository.get(filters)
