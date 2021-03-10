from common.responce.responce import Responce
from resourse.repositories.AdminUserRepositories import AdminUserRepositories
from resourse.services.Services import Services
from resourse.validator.BlogValidate import update


class AdminUserServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminUserRepositories()

    def get(self):
        return self.repository.get()

    def put(self, id: str, body: dict):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__
