from common.responce.responce import Responce
from db.connect.connect import db
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.SeasonSchema import seasons_schema


class SeasonRepositories(Repositories):
    @staticmethod
    def get(filters):
        season = db.session.query(Seasons).filter(filters).all()
        schema = seasons_schema.dump(season)
        print(Responce(400, {"err": "errr"}).__dict__)
        return Responce(200, {'data': schema}).__dict__
