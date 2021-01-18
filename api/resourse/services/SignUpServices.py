from common.responce.responce import Responce
from resourse.repositories.SignUpRepositories import SignUpRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import create


class SignUpServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SignUpRepositories()

    def get(self, token:str):
        if token:
            return self.repository.get(token)

        return Responce(400, {'error': 'Empty token'}).__dict__()


    def post(self, body):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Not valid'}).__dict__()
