from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.PlayerSerialization import players_serialization
from utils.responce.responce import Response


class PlayerRepositories(Repositories):
    def get(self):
        queries = (Players.id, Players.name, Players.team_id, Teams.name.label("team_name"))
        players = self.session.query(*queries).join("team").all()
        serialization = players_serialization.dump(players)

        return Response(status=200, message={'data': serialization})
