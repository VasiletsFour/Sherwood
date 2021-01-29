from common.responce.responce import Responce
from db.connect.connect import db
from db.models.LeagueModel import Leagues
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from resourse.scheam.LeagueSchema import leagues_schema


class LeagueRepositories(Repositories):
    @staticmethod
    def get(id: int):
        leagues = db.session.query(Leagues.name, Leagues.id, Seasons.name.label("season_name"),
                                   Seasons.id.label("season_id")).filter_by(
            season_id=id).join("season").all()
        schema = leagues_schema.dump(leagues)

        return Responce(200, {'data': schema}).__dict__
