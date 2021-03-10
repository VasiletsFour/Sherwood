from common.responce.responce import Responce
from resourse.repositories.LeagueRepositories import LeagueRepositories
from resourse.services.Services import Services


class LeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = LeagueRepositories()

    def get(self, id: str):
        filter_by = id if id else True

        return self.repository.get(filter_by)
