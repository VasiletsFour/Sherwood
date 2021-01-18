from resourse.controller.Controller import Controller
from resourse.services.SignUpServices import SignUpServices


class SignUp(Controller):
    def __init__(self):
        super().__init__()
        self.service = SignUpServices()

    def get(self, token=None):
        service = self.service.get(token)

        return service['message'], service["status"]

    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]
