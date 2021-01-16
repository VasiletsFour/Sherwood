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

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Get Error').__dict__()

    @staticmethod
    def post(body: object):
        try:
            player = Players(body["name"], body["team_id"])

            db.session.add(player)
            db.session.commit()

            return Responce(201, "create").__dict__()
        except:
            return Responce(400, 'Create Error').__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            player = Players.query.filter(Players.id == id)
            player.update(dict(name=body["name"]))

            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Update Error').__dict__()

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Players).filter(Players.id == id).delete()
            db.session.commit()

            return Responce(200, "Delete").__dict__()
        except:
            return Responce(400, 'Delete Error').__dict__()
