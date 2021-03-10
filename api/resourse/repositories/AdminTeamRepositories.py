from common.responce.responce import Responce
from db.connect.connect import db
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema


class AdminTeamRepositories(Repositories):
    @staticmethod
    def get():
        try:
            teams = db.session.query(Teams.id, Teams.name).filter(Teams.league_id == None).all()
            schema = teams_schema.dump(teams)

            return Responce(200, {'data': schema}).__dict__
        except AttributeError:
            return Responce(400, {'error': "Team get error"}).__dict__

    @staticmethod
    def post(body: dict):
        team = Teams(**body)

        db.session.add(team)
        db.session.commit()

        return Responce(201, {'data': 'create'}).__dict__

    @staticmethod
    def put(body: object):
        db.session.query(Teams).filter(Teams.id.in_(body["teams"])).update(dict(league_id=body["league_id"]),
                                                                           synchronize_session=False)
        db.session.commit()

        return Responce(201, {'data': 'update'}).__dict__

    @staticmethod
    def putUpdateName(id: str, body: dict):
        db.session.query(Teams).filter(Teams.id == id).update(dict(**body))
        db.session.commit()

        return Responce(201, {'data': 'update'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Teams).filter(Teams.id == id).delete()
        db.session.commit()

        return Responce(200, {'data': 'Delete'}).__dict__
