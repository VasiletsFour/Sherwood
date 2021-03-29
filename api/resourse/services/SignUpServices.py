from utils.responce.responce import Response
from resourse.repositories.SignUpRepositories import SignUpRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import create


class SignUpServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SignUpRepositories()

    def get(self, token: str):
        if token:
            return self.repository.get(token)

        return Response(status=400, message={'error': 'Empty token'}).__dict__

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__
