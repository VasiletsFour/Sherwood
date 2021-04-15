from db.models.PlayerModel import Players
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlayerSchema import players_schema
from utils.responce.responce import Response


class PlayerRepositories(Repositories):
    def get(self):
        queries = (Players.id, Players.name, Players.team_id, Teams.name.label("team_name"))
        players = self.session.query(*queries).join("team").all()
        schema = players_schema.dump(players)

        return Response(status=200, message={'data': schema})
