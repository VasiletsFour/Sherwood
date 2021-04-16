from db.models.LeagueModel import Leagues
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.TeamSerialization import teams_serialization
from utils.responce.responce import Response


class TeamRepositories(Repositories):
    def get(self, filters, order):
        try:
            queries = (Teams.id, Teams.name, Leagues.id.label("league_id"), Leagues.name.label("league_name"))
            teams = self.session.query(*queries).filter(filters).order_by(order).join("league").all()
            serialization = teams_serialization.dump(teams)

            return Response(200, {'data': serialization})
        except AttributeError:
            return Response(400, {'error': "Team get error"})
