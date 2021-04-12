from resourse.repositories.ApplicationListRepositories import ApplicationListRepositories
from resourse.services.Services import Services


class ApplicationListServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = ApplicationListRepositories()

    def get(self, **kwargs):
        return self.repository.get()
