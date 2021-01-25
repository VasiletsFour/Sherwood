from common.responce.responce import Responce
from resourse.repositories.AdminBlogRepositories import AdminBlogRepositories
from resourse.services.Services import Services
from resourse.validator.BlogValidate import create, update


class AdminBlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminBlogRepositories()

    def post(self, body: object, token: str):
        res = self.valid.validation(create, body)

        if res and token:
            return self.repository.post(body, token)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def put(self, id: str, body: object):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__()
