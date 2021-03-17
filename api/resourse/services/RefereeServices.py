from resourse.repositories.RefereeRepositories import RefereeRepositories

from resourse.services.Services import Services


class RefereeServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = RefereeRepositories()

    def get(self):
        return self.repository.get()
