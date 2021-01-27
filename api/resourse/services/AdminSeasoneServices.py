from common.responce.responce import Responce
from resourse.repositories.AdminSeasoneRepositories import AdminSeasonRepositories
from resourse.services.Services import Services
from resourse.validator.SeasonValidate import schema


class AdminSeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminSeasonRepositories()

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

    def delete(self, id: int):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__()
