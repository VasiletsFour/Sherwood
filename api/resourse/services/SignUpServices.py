from resourse.repositories.SignUpRepositories import SignUpRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import create
from utils.responce.responce import Response


class SignUpServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = SignUpRepositories()

    def get(self, token: str):
        decode_token = self.decode(token)

        if decode_token:
            return self.repository.get(decode_token)

        return Response(status=400, message={'error': 'Not a token'})

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})
