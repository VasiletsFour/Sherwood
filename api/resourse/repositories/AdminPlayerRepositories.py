from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_team_schema
from utils.responce.responce import Response


class AdminPlayerRepositories(Repositories):
    def get(self):
        player = self.session.query(Teams).all()
        schema = players_team_schema.dump(player)

        return Response(status=200, message={'data': schema}).__dict__

    def post(self, body: dict):
        player = Players(**body)

        self.session.add(player)
        self.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    def put(self, id: str, body: object):
        self.session.query(Players).filter(Players.id == id).update(dict(name=body["name"]))
        self.session.commit()

        return Response(status=200, message={'data': 'update'}).__dict__

    def delete(self, id: str):
        self.session.query(Players).filter(Players.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
