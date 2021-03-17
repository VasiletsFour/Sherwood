from common.responce.responce import Response
from db.connect.connect import db
from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_schema


class PlayerRepositories(Repositories):
    @staticmethod
    def get():
        players = db.session.query(Players.id, Players.name, Players.team_id, Teams.name.label("team_name")).join(
            "team").all()
        schema = players_schema.dump(players)

        return Response(status=200, message={'data': schema}).__dict__
