from resourse.repositories.LeagueRepositories import LeagueRepositories
from resourse.services.Services import Services


class LeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = LeagueRepositories()

    def get(self, id: str):
        return self.repository.get(id)
