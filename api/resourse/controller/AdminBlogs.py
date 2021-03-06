import flask_restful

from resourse.controller.Controller import Controller
from resourse.services.AdminBlogsServices import AdminBlogServices
from middleware.Middleware import admin_login


class AdminBlogs(Controller):
    def __init__(self):
        super().__init__()
        self.service = AdminBlogServices()

    @admin_login
    def get(self):
        file = flask_restful.request.files["blog_img"]
        service = self.service.get(file, self.token)

        return service.message, service.status

    @admin_login
    def post(self):
        service = self.service.post(self.body, self.token)

        return service.message, service.status

    @admin_login
    def put(self, id):
        service = self.service.put(id, self.body)

        return service.message, service.status

    @admin_login
    def delete(self, id):
        service = self.service.delete(id)

        return service.message, service.status
