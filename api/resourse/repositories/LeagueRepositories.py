from db.models.LeaguesModel import Leagues
from resourse.scheam.LeagueSchema import leagues_schema
from db.connect.connect import db
from common.responce.responce import Responce


class LeagueRepositories:
    @staticmethod
    def get():
        try:
            leagues = db.session.query(Leagues).all()

            schema = leagues_schema.dump(leagues)

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Error').__dict__()

    @staticmethod
    def post(body: object):
        try:
            leagues = Leagues("Elit-League", body["season_id"])
            print(leagues)
            # for i in range(body["count"] - 1):
            #     leagues.append(Leagues("League {num}".format(num=i), body["season_id"]))

            db.session.add(leagues)
            db.session.commit()

            return Responce(201, "create").__dict__()
        except:
            return Responce(400, 'Error').__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            test = Leagues.query.filter(Leagues.id == id)
            test.update(dict(name=body["name"]))
            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Error').__dict__()
