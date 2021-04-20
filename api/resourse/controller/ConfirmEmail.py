from resourse.controller.Controller import Controller
from resourse.services.ConfirmEmailServices import ConfirmEmailServices


class ConfirmEmail(Controller):
    def __init__(self):
        super().__init__()
        self.service = ConfirmEmailServices()

    def get(self, token=None):
        service = self.service.get(token)

        return service.message, service.status

    def post(self):
        service = self.service.post(self.body)

        return service.message, service.status
