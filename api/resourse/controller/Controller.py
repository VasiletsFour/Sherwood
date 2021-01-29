# noinspection PyProtectedMember
from flask_restful import Resource, request


class Controller(Resource):
    def __init__(self):
        self.body = request.get_json()
        self.name = request.args.get("name")
        self.league_id = request.args.get("league_id")
        self.kind = request.args.get("kind")
        self.type = request.args.get("type")
        self.token = request.headers.get("Authorization")

    def get(self, *args, **kwargs):
        pass

    def post(self, *args, **kwargs):
        pass

    def put(self, *args, **kwargs):
        pass

    def delete(self, *args, **kwargs):
        pass
