from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.PlayerSerialization import players_team_serialization
from utils.responce.responce import Response


class AdminPlayerRepositories(Repositories):
    def get(self, search):
        filters = Teams.name == search if search else True
        player = self.session.query(Teams).filter(filters).all()
        count = self.session.query(Teams).count()

        serialization = players_team_serialization.dump(player)

        return Response(status=200, message={'data': {"list": serialization, "count": count}})

    def post(self, body: dict):
        player = Players(**body)

        self.session.add(player)
        self.session.commit()

        return Response(status=201, message={'data': 'create'})

    def put(self, id: str, body: dict):
        self.session.query(Players).filter(Players.id == id).update(dict(name=body["name"]))
        self.session.commit()

        return Response(status=200, message={'data': 'update'})

    def delete(self, id: str):
        self.session.query(Players).filter(Players.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
