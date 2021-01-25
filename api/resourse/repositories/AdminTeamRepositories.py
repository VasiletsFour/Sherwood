from common.responce.responce import Responce
from db.connect.connect import db
from db.models.TeamModel import Team
from resourse.repositories.Repositories import Repositories


class AdminTeamRepositories(Repositories):
    @staticmethod
    def post(body: object):
        try:
            team = Team(**body)

            db.session.add(team)
            db.session.commit()

            return Responce(201, {'data': 'create'}).__dict__()
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__()

    @staticmethod
    def put(id: str, body: object):
        team = Team.query.filter(Team.id == id)
        team.update(dict(name=body["name"], league_id=body["league_id"]))

        db.session.commit()

        return Responce(200, {'data': 'update'}).__dict__()

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Team).filter(Team.id == id).delete()
            db.session.commit()

            return Responce(200, {'data': 'Delete'}).__dict__()
        except:
            return Responce(400, {'error': 'Delete Error'}).__dict__()
