from resourse.repositories.LoginRepositories import LoginRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import login
from utils.responce.responce import Response


class LoginServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = LoginRepositories()

    def post(self, body: dict):
        res = self.valid.validation(login, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Invalid body'},
                        logger_message="Login Invalid body:{body}".format(body=str(body)))
