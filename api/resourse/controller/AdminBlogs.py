import flask_restful

import common.middleware.admin
from resourse.controller.Controller import Controller
from resourse.services.AdminBlogsServices import AdminBlogServices


class AdminBlogs(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminBlogServices()

    @common.middleware.admin.login_admin
    def get(self):
        file = flask_restful.request.files["file"]
        service = self.service.get(file, self.token)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def post(self):
        service = self.service.post(self.body, self.token)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, flask_restful.request.get_json())

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
