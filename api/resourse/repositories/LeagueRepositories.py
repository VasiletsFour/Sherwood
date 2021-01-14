from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeaguesModel import Leagues
from resourse.scheam.LeagueSchema import leagues_schema


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
    def put(id: str, body: object):
        try:
            league = Leagues.query.filter(Leagues.id == id)
            league.update(dict(name=body["name"]))
            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Error').__dict__()

    @staticmethod
    def delete(id: str):
        try:
            league = Leagues.query.filter(Leagues.id == id)
            league.delete(league)
            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Error').__dict__()


def post(body: object):
    try:
        league = Leagues("Elit-League", body["season_id"])
        db.session.add(league)

        for i in range(body["count"] - 1):
            next_league = Leagues("League {num}".format(num=i), body["season_id"])
            db.session.ad(next_league)

        db.session.commit()

        return Responce(201, "create").__dict__()
    except:
        return Responce(400, 'Error').__dict__()
