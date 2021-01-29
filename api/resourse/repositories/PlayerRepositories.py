from common.responce.responce import Responce
from db.connect.connect import db
from db.models.PlayerModel import Players
from db.models.TeamModel import Team
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_schema


class PlayerRepositories(Repositories):
    @staticmethod
    def get():
        try:
            players = db.session.query(Players.id, Players.name, Players.team_id, Team.name.label("team_name")).join(
                "team").all()
            schema = players_schema.dump(players)

            return Responce(200, {'data': schema}).__dict__
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__
