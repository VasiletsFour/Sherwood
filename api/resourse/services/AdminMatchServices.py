from resourse.repositories.AdminMatchRepositories import AdminMatchRepositories
from resourse.services.Services import Services


class AdminMatchServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminMatchRepositories()

    def get(self, team_one, team_two):
        return self.repository.get(team_one, team_two)
