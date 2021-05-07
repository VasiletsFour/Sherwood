from resourse.repositories.TournamentTableRepositories import TournamentTableRepositories
from resourse.services.Services import Services


class TournamentTableServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TournamentTableRepositories()

    def get(self):
        return self.repository.get()
