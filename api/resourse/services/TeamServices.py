from common.responce.responce import Responce
from db.models.TeamModel import Team
from resourse.repositories.TeamRepositories import TeamRepositories
from resourse.services.Services import Services
from resourse.validator.TeamServices import create, update


class TeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = TeamRepositories()

    def get(self, name: str = None, league_id: str = None):
        filters = True

        if name or league_id:
            filters = (Team.league_id == league_id) | (Team.name == name)

        return self.repository.get(filters)

    def post(self, body: object):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def put(self, id: str, body: object):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__()

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__()
