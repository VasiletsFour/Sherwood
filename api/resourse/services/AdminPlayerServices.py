from common.responce.responce import Responce
from resourse.repositories.AdminPlayerRepositories import AdminPlayerRepositories
from resourse.services.Services import Services
from resourse.validator.PlayerValidate import create, update


class AdminPlayerServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminPlayerRepositories()

    def post(self, body: object):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Not valid'}).__dict__

    def put(self, id: str, body: object):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__

    def delete(self, id):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__
