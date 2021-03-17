from common.responce.responce import Response
from db.connect.connect import db
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.SeasonSchema import seasons_schema


class SeasonRepositories(Repositories):
    @staticmethod
    def get(filters):
        season = db.session.query(Seasons).filter(filters).order_by(Seasons.date).all()
        schema = seasons_schema.dump(season)

        return Response(status=200, message={'data': schema}).__dict__
