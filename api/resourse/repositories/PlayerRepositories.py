from common.responce.responce import Responce
from db.connect.connect import db
from db.models.PlayerModel import Players
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_schema


class PlayerRepositories(Repositories):
    @staticmethod
    def get():
        try:
            players = db.session.query(Players).all()
            schema = players_schema.dump(players)

            return Responce(200, {'data': schema}).__dict__
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__
