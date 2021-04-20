from resourse.controller.Controller import Controller
from resourse.services.SignUpServices import SignUpServices


class SignUp(Controller):
    def __init__(self):
        super().__init__()
        self.service = SignUpServices()

    def post(self):
        service = self.service.post(self.body)

        return service.message, service.status
