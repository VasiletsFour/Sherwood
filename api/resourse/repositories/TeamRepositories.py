from db.models.LeagueModel import Leagues
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema
from utils.responce.responce import Response


class TeamRepositories(Repositories):
    def get(self, filters, order):
        try:
            teams = self.session.query(Teams.id, Teams.name, Leagues.id.label("league_id"),
                                       Leagues.name.label("league_name")).filter(filters).order_by(
                order).join(
                "league").all()

            schema = teams_schema.dump(teams)

            return Response(200, {'data': schema}).__dict__
        except AttributeError:
            return Response(400, {'error': "Team get error"}).__dict__
