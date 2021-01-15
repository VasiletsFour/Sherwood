from common.responce.responce import Responce
from common.time.time import year
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

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Get Error').__dict__()

    @staticmethod
    def post(body: object):
        try:
            season_name = body["name"] + " " + year()
            season = Seasons(season_name)

            db.session.add(season)
            db.session.commit()

            return Responce(201, "create").__dict__()
        except:
            return Responce(400, 'Create Error').__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            season = Seasons.query.filter(Seasons.id == id)
            season.update(dict(name=body["name"]))

            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Update Error').__dict__()
