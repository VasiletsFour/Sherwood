import common.middleware.user
from resourse.controller.Controller import Controller
from resourse.services.AccountServices import AccountServices


class Account(Controller):
    def __init__(self):
        super().__init__()
        self.service = AccountServices()

    @common.middleware.user.login_user
    def get(self, *args, **kwargs):
        service = self.service.get(self.token)

        return service['message'], service["status"]