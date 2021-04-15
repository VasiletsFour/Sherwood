from sqlalchemy.exc import IntegrityError

from db.models.LeagueModel import Leagues
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class AdminLeagueRepositories(Repositories):
    def post(self, body: dict):
        try:
            assert self.session.query(Leagues).filter(Leagues.season_id == body["season_id"]).first() is None

            leagues = [Leagues("Elite-Лига", body["season_id"])]

            for i in range(body["count"] - 1):
                leagues.append(Leagues("Лига-{num}".format(num=i + 1), body["season_id"]))

            self.session.bulk_save_objects(leagues)
            self.session.commit()

            return Response(status=201, message={"data": "create"})
        except AssertionError:
            return Response(status=400, message={"error": 'Create Error, this season have leagues'})
        except IntegrityError:
            return Response(status=400, message={"error": 'Create Error, wrong id'})

    def put(self, body: dict):
        league = Leagues(**body)

        self.session.add(league)
        self.session.commit()

        return Response(status=201, message={"data": "update"})

    def delete(self, id: str):
        self.session.query(Leagues).filter(Leagues.id == id).delete()
        self.session.commit()

        return Response(status=201, message={'data': "Delete"})
