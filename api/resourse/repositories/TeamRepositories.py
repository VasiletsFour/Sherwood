from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema


class TeamRepositories(Repositories):
    @staticmethod
    def get(filters, order):
        try:
            teams = db.session.query(Teams.id, Teams.name, Leagues.id.label("league_id"),
                                     Leagues.name.label("league_name")).filter(filters).order_by(
                order).join(
                "league").all()
            schema = teams_schema.dump(teams)

            return Responce(200, {'data': schema}).__dict__
        except AttributeError:
            return Responce(400, {'error': "Team get error"}).__dict__
