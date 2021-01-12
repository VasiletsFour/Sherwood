from db.models.SeasonsModel import Seasons
from resourse.scheam.SeasonSchema import seasons_schema
from db.connect.connect import db
from common.responce.responce import Responce


class SeasonRepositories:
    @staticmethod
    def get(name: str or None):
        try:
            if name:
                season = db.session.query(Seasons).filter_by(name=name).all()

            if name is None:
                season = db.session.query(Seasons).all()

            schema = seasons_schema.dump(season)

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Error').__dict__()

    @staticmethod
    def post(body: object):
        try:
            seasone = Seasons(body["name"])

            db.session.add(seasone)
            db.session.commit()

            return Responce(201, "create").__dict__()
        except:
            return Responce(400, 'Error').__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            test = Seasons.query.filter(Seasons.id == id)
            test.update(dict(name=body["name"]))
            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Error').__dict__()
