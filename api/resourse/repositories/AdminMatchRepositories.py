from resourse.repositories.Repositories import Repositories
from resourse.serialization.PlayerSerialization import players_team_serialization
from utils.responce.responce import Response
from sqlalchemy import or_

from db.models.TeamsModel import Teams
from sqlalchemy import or_

from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.PlayerSerialization import players_team_serialization
from utils.responce.responce import Response


class AdminMatchRepositories(Repositories):
    def get(self, team_one, team_two):
        filters = or_(Teams.id == team_one, Teams.id == team_two) if team_one and team_two else True
        player = self.session.query(Teams).filter(filters).all()
        serialization = players_team_serialization.dump(player)

        return Response(status=200, message={'data': serialization})
