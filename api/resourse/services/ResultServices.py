from resourse.repositories.ResultRepositories import ResultRepositories
from resourse.services.Services import Services


class ResultServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = ResultRepositories()

    def get(self):
        return self.repository.get()
