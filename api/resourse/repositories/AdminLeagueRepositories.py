from sqlalchemy.exc import IntegrityError

from utils.responce.responce import Response
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

            return Response(status=201, message="create").__dict__
        except AssertionError:
            return Response(status=400, message='Create Error, this season have leagues').__dict__
        except IntegrityError:
            return Response(status=400, message='Create Error, wrong id').__dict__

    @staticmethod
    def put(body: dict):
        league = Leagues(**body)

        db.session.add(league)
        db.session.commit()

        return Response(status=201, message="update").__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Leagues).filter(Leagues.id == id).delete()
        db.session.commit()

        return Response(status=201, message="Delete").__dict__
