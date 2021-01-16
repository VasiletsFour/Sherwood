from common.responce.responce import Responce
from db.connect.connect import db
from db.models.PlayerModel import Players
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_schema


class SignUpRepositories(Repositories):
    @staticmethod
    def get():
        try:
            # players = db.session.query(Players).all()
            # schema = players_schema.dump(players)

            return Responce(200, {'data': 'Email confirm'}).__dict__()
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__()

    @staticmethod
    def post(body: object):
        try:
            # player = Players(body["name"], body["team_id"])
            #
            # db.session.add(player)
            # db.session.commit()

            return Responce(201, {'error': 'Confirm email'}).__dict__()
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__()
