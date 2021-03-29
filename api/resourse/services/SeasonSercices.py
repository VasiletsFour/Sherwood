from db.models.SeasonsModel import Seasons
from resourse.repositories.SeasonRepositories import SeasonRepositories
from resourse.services.Services import Services


class SeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SeasonRepositories()

    def get(self, name: str):
        filters = True
        # test
        if name:
            filters = Seasons.name.op("regexp")(name)

        return self.repository.get(filters)
