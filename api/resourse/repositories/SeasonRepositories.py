from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.SeasonSchema import seasons_schema
from utils.responce.responce import Response


class SeasonRepositories(Repositories):
    def get(self, filters):
        season = self.session.query(Seasons).filter(filters).order_by(Seasons.date).all()
        schema = seasons_schema.dump(season)

        return Response(status=200, message={'data': schema})
