from common.responce.responce import Response
from db.connect.connect import db
from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_team_schema


class AdminPlayerRepositories(Repositories):
    @staticmethod
    def get():
        player = db.session.query(Teams).all()
        schema = players_team_schema.dump(player)

        return Response(status=200, message={'data': schema}).__dict__

    @staticmethod
    def post(body: dict):
        player = Players(**body)

        db.session.add(player)
        db.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    @staticmethod
    def put(id: str, body: object):
        db.session.query(Players).filter(Players.id == id).update(dict(name=body["name"]))
        db.session.commit()

        return Response(status=200, message={'data': 'update'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Players).filter(Players.id == id).delete()
        db.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
