from utils.middleware.middleware import admin_login
from resourse.controller.Controller import Controller
from resourse.services.AdminTimeTableServices import AdminTimeTableServices


class AdminTimeTable(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminTimeTableServices()

    # @admin_login
    # def get(self, league_id):
    #     service = self.service.get(league_id)
    #
    #     return service['message'], service["status"]

    # @admin_login
    def post(self, *args, **kwargs):
        service = self.service.post(self.body)

        return service['message'], service["status"]
    #
    # @admin_login
    # def put(self, id=None):
    #     service = self.service.putUpdateName(id, self.body) if id else self.service.put(self.body)
    #
    #     return service['message'], service["status"]
    #
    # @admin_login
    # def delete(self, id):
    #     service = self.service.deleteFromLeague(id) if self.delFromLeague else self.service.delete(id)
    #
    #     return service['message'], service["status"]