from flask_restful import Resource, request

import common.middleware.admin
from resourse.services.BlogServices import BlogServices


class Blogs(Resource):
    def __init__(self):
        self.service = BlogServices()
        self.token = request.headers.get("Authorization")

    def get(self, *args, **kwargs):
        service = self.service.get()

        return service['message'], service["status"]

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
