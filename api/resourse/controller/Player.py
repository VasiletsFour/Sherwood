from resourse.controller.Controller import Controller
from resourse.services.PlayerServices import PlayerServices
from utils.middleware.middleware import user_login


class Player(Controller):
    def __init__(self):
        super().__init__()
        self.service = PlayerServices()

    @user_login
    def get(self, *args, **kwargs):
        service = self.service.get()

        return service.message, service.status
