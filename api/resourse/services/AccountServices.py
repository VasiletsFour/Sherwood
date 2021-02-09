from common.responce.responce import Responce
from common.token.token import Token
from resourse.repositories.AccountRepositories import AccountRepositories
from resourse.services.Services import Services


class AccountServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AccountRepositories()
        self.token = Token()

    def get(self, auth):
        decode = self.token.decodeToken(auth)

        if decode:
            return self.repository.get(decode["id"])

        return Responce(400, {'error': 'Invalid Token'}).__dict__
