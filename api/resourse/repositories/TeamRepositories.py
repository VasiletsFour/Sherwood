from db.models.LeagueModel import Leagues
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.serialization.TeamSerialization import teams_serialization
from utils.responce.responce import Response


class TeamRepositories(Repositories):
    def get(self, kind, sort_by, league_id):
        try:
            filters = True
            order = Teams.league_id

            if kind == "asc":
                if sort_by == "name": order = Teams.name
                if sort_by == "league_id": order = Teams.league_id

            if kind == "desc":
                if sort_by == "name": order = Teams.name.desc()
                if sort_by == "league_id": order = Teams.league_id.desc()

            if league_id:
                filters = (Teams.league_id == league_id)
                # | (Teams.name.like(kwargs["name"] + "%"))
            queries = (Teams.id, Teams.name, Leagues.id.label("league_id"), Leagues.name.label("league_name"))
            teams = self.session.query(*queries).filter(filters).order_by(order).join("league").all()
            serialization = teams_serialization.dump(teams)

            return Response(200, {'data': serialization})
        except AttributeError:
            return Response(400, {'error': "Team get error"})
