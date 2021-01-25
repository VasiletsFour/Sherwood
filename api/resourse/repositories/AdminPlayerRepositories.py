from common.responce.responce import Responce
from db.connect.connect import db
from db.models.PlayerModel import Players
from resourse.repositories.Repositories import Repositories


class AdminPlayerRepositories(Repositories):
    @staticmethod
    def post(body: object):
        try:
            player = Players(**body)

            db.session.add(player)
            db.session.commit()

            return Responce(201, {'data': 'create'}).__dict__()
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            player = Players.query.filter(Players.id == id)
            player.update(dict(name=body["name"]))

            db.session.commit()

            return Responce(200, {'data': 'update'}).__dict__()
        except:
            return Responce(400, {'error': 'Update Error'}).__dict__()

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Players).filter(Players.id == id).delete()
            db.session.commit()

            return Responce(200, {'data': 'Delete'}).__dict__()
        except:
            return Responce(400, {'error': 'Delete Error'}).__dict__()
