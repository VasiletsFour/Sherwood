from resourse.controller.Controller import Controller
from resourse.services.AccountServices import AccountServices
from utils.middleware.middleware import user_login


class Account(Controller):
    def __init__(self):
        super().__init__()
        self.service = AccountServices()

    @user_login
    def get(self, *args, **kwargs):
        service = self.service.get(self.token)

        return service.message, service.status
