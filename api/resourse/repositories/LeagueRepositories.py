from db.models.LeagueModel import Leagues
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.LeagueSchema import leagues_schema
from utils.responce.responce import Response


class LeagueRepositories(Repositories):
    def get(self, filter_by):
        leagues = self.session.query(Seasons).filter(Seasons.active == True, Leagues.season_id == filter_by).all()
        schema = leagues_schema.dump(leagues)

        return Response(status=200, message={'data': schema})
