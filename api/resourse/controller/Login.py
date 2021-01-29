from resourse.controller.Controller import Controller
from resourse.services.LoginServices import LoginServices


class Login(Controller):
    def __init__(self):
        super().__init__()
        self.service = LoginServices()

    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]
