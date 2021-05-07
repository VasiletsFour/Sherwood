from resourse.repositories.SeasonRepositories import SeasonRepositories
from resourse.services.Services import Services


class SeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SeasonRepositories()

    def get(self, name: str):
        return self.repository.get(name)
