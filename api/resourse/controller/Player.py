import common.middleware.user
from resourse.controller.Controller import Controller
from resourse.services.PlayerServices import PlayerServices


class Player(Controller):
    def __init__(self):
        super().__init__()
        self.service = PlayerServices()

    @common.middleware.user.login_user
    def get(self, *args, **kwargs):
        service = self.service.get()

        return service['message'], service["status"]

