from common.responce.responce import Responce
from db.connect.connect import db
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.SeasonSchema import seasons_schema


class SeasonRepositories(Repositories):
    @staticmethod
    def get(filters):
        try:
            season = db.session.query(Seasons).filter(filters).all()
            schema = seasons_schema.dump(season)

            return Responce(200, {'data': schema}).__dict__()
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__()
