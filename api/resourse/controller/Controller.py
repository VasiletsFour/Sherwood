import flask_restful


class Controller(flask_restful.Resource):
    def __init__(self):
        self.body = flask_restful.request.get_json()
        self.team_one = flask_restful.request.args.get("team_one")
        self.team_two = flask_restful.request.args.get("team_two")
        self.name = flask_restful.request.args.get("name")
        self.search = flask_restful.request.args.get("search")
        self.sortBy = flask_restful.request.args.get("sortBy")
        self.fromDate = flask_restful.request.args.get("fromDate")
        self.beforeDate = flask_restful.request.args.get("beforeDate")
        self.tags = flask_restful.request.args.get("tags")
        self.league_id = flask_restful.request.args.get("league_id")
        self.kind = flask_restful.request.args.get("kind")
        self.type = flask_restful.request.args.get("type")
        self.tour = flask_restful.request.args.get("tour")
        self.delFromLeague = flask_restful.request.args.get("deleteFromLeague")
        self.token = flask_restful.request.headers.get("Authorization")
