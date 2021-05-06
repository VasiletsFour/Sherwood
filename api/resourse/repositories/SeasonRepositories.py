from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.serialization.SeasonSerialization import seasons_serialization
from utils.responce.responce import Response


class SeasonRepositories(Repositories):
    def get(self, filters):
        season = self.session.query(Seasons).filter(filters).order_by(Seasons.date).all()
        serialization = seasons_serialization.dump(season)
        
        return Response(status=200, message={'data': serialization})
