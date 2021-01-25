from flask_restful import Resource, request

from resourse.services.BlogServices import BlogServices


class Blogs(Resource):
    def __init__(self):
        self.service = BlogServices()
        self.token = request.headers.get("Authorization")

    def get(self, *args, **kwargs):
        service = self.service.get()

        return service['message'], service["status"]
