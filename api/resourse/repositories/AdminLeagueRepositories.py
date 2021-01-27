from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from resourse.repositories.Repositories import Repositories


class AdminLeagueRepositories(Repositories):
    @staticmethod
    def post(body: object):
        try:
            leagues = [Leagues("Elite-Лига", body["season_id"])]

            for i in range(body["count"] - 1):
                leagues.append(Leagues("Лига-{num}".format(num=i + 1), body["season_id"]))

            db.session.bulk_save_objects(leagues)
            db.session.commit()

            return Responce(201, "create").__dict__
        except:
            return Responce(400, 'Create Error').__dict__

    @staticmethod
    def put(id: str, body: object):
        try:
            league = Leagues.query.filter(Leagues.id == id)
            league.update(dict(name=body["name"]))

            db.session.commit()

            return Responce(200, "update").__dict__
        except:
            return Responce(400, 'Update Error').__dict__

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Leagues).filter(Leagues.id == id).delete()
            db.session.commit()

            return Responce(200, "Delete").__dict__
        except:
            return Responce(400, 'Delete Error').__dict__
