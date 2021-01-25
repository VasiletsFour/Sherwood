from common.responce.responce import Responce
from resourse.repositories.LeagueRepositories import LeagueRepositories
from resourse.services.Services import Services


class LeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = LeagueRepositories()

    def get(self, id: int):
        if id:
            return self.repository.get(id)

        return Responce(400, {'error': 'Not valid'}).__dict__()
