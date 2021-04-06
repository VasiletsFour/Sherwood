from resourse.repositories.TimeTableRepositories import TimeTableRepositories
from resourse.services.Services import Services


class TimeTableServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TimeTableRepositories()

    def get(self, **kwargs):
        return self.repository.get()
