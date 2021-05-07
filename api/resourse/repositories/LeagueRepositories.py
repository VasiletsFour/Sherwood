from db.models.LeagueModel import Leagues
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.serialization.LeagueSerialization import leagues_serialization
from utils.responce.responce import Response


class LeagueRepositories(Repositories):
    def get(self, id):
        filter_by = id if id else True
        leagues = self.session.query(Seasons).filter(Seasons.active == True, Leagues.season_id == filter_by).all()
        serialization = leagues_serialization.dump(leagues)

        return Response(status=200, message={'data': serialization})
