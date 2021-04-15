from sqlalchemy.exc import IntegrityError

from db.models.LeagueModel import Leagues
from db.models.SeasonsModel import Seasons
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response
from utils.time.time import year


class AdminSeasonRepositories(Repositories):
    def post(self, body: dict):
        try:
            season_name = body["name"] + "-" + year()
            season = Seasons(season_name)

            self.session.add(season)
            self.session.commit()

            return Response(status=201, message={'data': 'create'})
        except IntegrityError:
            return Response(status=400, message={'error': 'Season with this name already exists'})

    def put(self, id: str, body: dict):
        try:
            self.session.query(Seasons).filter(Seasons.id == id).update(dict(name=body["name"]))
            self.session.commit()

            return Response(status=200, message={'data': 'update'})
        except IntegrityError:
            return Response(status=400, message={'error': 'Season with this name already exists'})

    def delete(self, id: int):
        self.session.query(Leagues).filter(Leagues.season_id == id).delete()
        self.session.query(Seasons).filter(Seasons.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
