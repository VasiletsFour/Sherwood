from resourse.repositories.ConfirmEmailpRepositories import ConfirmEmailRepositories
from resourse.services.Services import Services
from resourse.validator.ConfirmEmailValidate import confirmAgain
from utils.responce.responce import Response


class ConfirmEmailServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = ConfirmEmailRepositories()

    def get(self, token: str):
        if token:
            decode_token = self.decode(token)

            if decode_token:
                return self.repository.get(decode_token)

            return Response(status=400, message={'error': 'Token Expired'})
        return Response(status=400, message={'error': 'Not a token'})

    def post(self, body: dict):
        res = self.valid.validation(confirmAgain, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}, logger_message="Confirm Email Invalid Body")
