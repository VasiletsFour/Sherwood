from flask_restful import Resource, request

import common.middleware.admin
from resourse.services.AdminBlogsServices import AdminBlogServices


class AdminBlogs(Resource):
    def __init__(self):
        self.service = AdminBlogServices()
        self.token = request.headers.get("Authorization")

    @common.middleware.admin.login_admin
    def post(self, *args, **kwargs):
        service = self.service.post(request.get_json(), self.token)

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def put(self, id):
        service = self.service.put(id, request.get_json())

        return service['message'], service["status"]

    @common.middleware.admin.login_admin
    def delete(self, id):
        service = self.service.delete(id)

        return service['message'], service["status"]
