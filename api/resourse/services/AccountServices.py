from resourse.repositories.AccountRepositories import AccountRepositories
from resourse.services.Services import Services
from utils.responce.responce import Response
from utils.token.token import Token


class AccountServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AccountRepositories()
        self.token = Token()

    def get(self, auth: str):
        decode = self.token.decodeToken(auth)

        if decode:
            return self.repository.get(decode["id"])

        return Response(status=400, message={'error': 'Invalid Token'},
                        logger_message="Account fail Invalid token")
