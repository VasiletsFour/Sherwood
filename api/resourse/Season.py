from flask_restful import Resource, request
from common.middleware.admin import login_admin


class Season(Resource):
    def get(self):
        return {"season": "simmer"}
    @login_admin
    def post(self):
        return request.get_json()
