from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.PlayerSerialization import players_team_serialization
from utils.responce.responce import Response


class AdminMatchRepositories(Repositories):
    def get(self, filters):
        player = self.session.query(Teams).filter(filters).all()
        serialization = players_team_serialization.dump(player)

        return Response(status=200, message={'data': serialization})
