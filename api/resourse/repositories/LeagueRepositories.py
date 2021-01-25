from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from resourse.repositories.Repositories import Repositories
from resourse.scheam.LeagueSchema import leagues_schema


class LeagueRepositories(Repositories):
    @staticmethod
    def get(id: int):
        try:
            leagues = db.session.query(Leagues).filter_by(season_id=id).all()
            schema = leagues_schema.dump(leagues)

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Get Error').__dict__()
