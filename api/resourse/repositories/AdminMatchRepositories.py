from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_team_schema
from utils.responce.responce import Response


class AdminMatchRepositories(Repositories):
    def get(self, filters):
        player = self.session.query(Teams).filter(filters).all()
        schema = players_team_schema.dump(player)

        return Response(status=200, message={'data': schema})
