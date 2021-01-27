from sqlalchemy.exc import IntegrityError

from common.responce.responce import Responce
from common.time.time import year
from db.connect.connect import db
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories


class AdminSeasonRepositories(Repositories):
    @staticmethod
    def post(body: object):
        try:
            season_name = body["name"] + "-" + year()
            season = Seasons(season_name)

            db.session.add(season)
            db.session.commit()

            return Responce(201, {'data': 'create'}).__dict__
        except IntegrityError:
            return Responce(400, {'error': 'Season with this name already exists'}).__dict__

    @staticmethod
    def put(id: str, body: object):
        try:
            season = db.session.query(Seasons).filter(Seasons.id == id)
            season.update(dict(name=body["name"]))

            db.session.commit()

            return Responce(200, {'data': 'update'}).__dict__
        except IntegrityError:
            return Responce(400, {'error': 'Season with this name already exists'}).__dict__

    @staticmethod
    def delete(id: int):
        db.session.query(Seasons).filter(Seasons.id == id).delete()
        db.session.commit()

        return Responce(200, {'data': 'Delete'}).__dict__
