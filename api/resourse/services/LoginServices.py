from common.responce.responce import Responce
from resourse.repositories.LoginRepositories import LoginRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import login


class LoginServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = LoginRepositories()

    def post(self, body: dict):
        res = self.valid.validation(login, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Invalid body'}).__dict__
