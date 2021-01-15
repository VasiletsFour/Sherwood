from common.responce.responce import Responce
from db.connect.connect import db
from db.models.TeamModel import Team
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema


class TeamRepositories(Repositories):
    @staticmethod
    def get(filters):
        try:
            teams = db.session.query(Team).filter(filters).all()
            schema = teams_schema.dump(teams)

            return Responce(200, schema).__dict__()
        except:
            return Responce(400, 'Get Error').__dict__()

    @staticmethod
    def post(body: object):
        try:
            team = Team(body["name"], body["league_id"])

            db.session.add(team)
            db.session.commit()

            return Responce(201, "create").__dict__()
        except:
            return Responce(400, 'Create Error').__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            team = Team.query.filter(Team.id == id)
            team.update(dict(name=body["name"], league_id=body["league_id"]))

            db.session.commit()

            return Responce(200, "update").__dict__()
        except:
            return Responce(400, 'Update Error').__dict__()

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Team).filter(Team.id == id).delete()
            db.session.commit()

            return Responce(200, "Delete").__dict__()
        except:
            return Responce(400, 'Delete Error').__dict__()
