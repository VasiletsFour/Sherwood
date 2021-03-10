from sqlalchemy.exc import IntegrityError

from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from resourse.repositories.Repositories import Repositories


class AdminLeagueRepositories(Repositories):
    @staticmethod
    def post(body: dict):
        try:
            assert db.session.query(Leagues).filter(Leagues.season_id == body["season_id"]).first() is None

            leagues = [Leagues("Elite-Лига", body["season_id"])]

            for i in range(body["count"] - 1):
                leagues.append(Leagues("Лига-{num}".format(num=i + 1), body["season_id"]))

            db.session.bulk_save_objects(leagues)
            db.session.commit()

            return Responce(201, "create").__dict__
        except AssertionError:
            return Responce(400, 'Create Error, this season have leagues').__dict__
        except IntegrityError:
            return Responce(400, 'Create Error, wrong id').__dict__

    @staticmethod
    def put(body: dict):
        league = Leagues(**body)

        db.session.add(league)
        db.session.commit()

        return Responce(201, "update").__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Leagues).filter(Leagues.id == id).delete()
        db.session.commit()

        return Responce(201, "Delete").__dict__
