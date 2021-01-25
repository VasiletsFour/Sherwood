from common.responce.responce import Responce
from db.connect.connect import db
from db.models.TeamModel import Team
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema


class TeamRepositories(Repositories):
    @staticmethod
    def get(filters):
        teams = db.session.query(Team).options("Team").all()
        schema = teams_schema.dump(teams)

        return Responce(200, {'data': schema}).__dict__()
