import common.middleware.admin
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

    @common.middleware.admin.login_admin
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, self.body)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
