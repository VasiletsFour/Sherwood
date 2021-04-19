from middleware.Middleware import admin_login
from resourse.controller.Controller import Controller
from resourse.services.AdminScorerServices import AdminScorerServices


class AdminScorer(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminScorerServices()

    @admin_login
    def post(self):
        service = self.service.post(self.body)

        return service.message, service.status

    @admin_login
    def put(self, id):
        service = self.service.put(id, self.body)

        return service.message, service.status

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service.message, service.status
