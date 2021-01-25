from common.responce.responce import Responce
from resourse.repositories.AdminLeagueRepositories import AdminLeagueRepositories
from resourse.services.Services import Services
from resourse.validator.LeagueValidate import update, create


class AdminLeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminLeagueRepositories()

    def post(self, body):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def put(self, id, body):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def delete(self, id):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__()
