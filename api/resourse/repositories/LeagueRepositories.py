from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.LeagueSchema import leagues_schema


class LeagueRepositories(Repositories):
    @staticmethod
    def get(filter_by):
        leagues = db.session.query(Seasons).filter(Seasons.active == True, Leagues.season_id == filter_by).all()
        schema = leagues_schema.dump(leagues)

        return Responce(200, {'data': schema}).__dict__
