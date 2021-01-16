from common.responce.responce import Responce
from db.models.SeasonsModel import Seasons
from resourse.repositories.SeasonRepositories import SeasonRepositories
from resourse.services.Services import Services
from resourse.validator.SeasonValidte import schema


class SeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SeasonRepositories()

    def get(self, name: str):
        filters = True

        if name:
            filters = Seasons.name.op("regexp")(name)

        return self.repository.get(filters)

    def post(self, body: object):
        res = self.valid.validation(schema, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def put(self, id: str, body: object):
        res = self.valid.validation(schema, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__()
