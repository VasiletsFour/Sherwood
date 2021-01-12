from resourse.repositories.LeagueRepositories import LeagueRepositories
from resourse.validator.LeagueValidte import schema, create
from cerberus import Validator
from common.responce.responce import Responce


class LeagueServices:
    def __init__(self):
        self.repository = LeagueRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body):
        valid = Validator(create)
        res = valid.validate(body)

        if res:
            return self.repository.post(body)

        return Responce(400, 'Not valid').__dict__()

    def put(self, id, body):
        valid = Validator(schema)
        res = valid.validate(body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, 'Not valid').__dict__()
