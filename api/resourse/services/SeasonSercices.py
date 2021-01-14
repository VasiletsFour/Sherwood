from cerberus import Validator

from common.responce.responce import Responce
from resourse.repositories.SeasonRepositories import SeasonRepositories
from resourse.validator.SeasonValidte import schema


class SeasonServices:
    def __init__(self):
        self.repository = SeasonRepositories()

    def get(self, name):
        return self.repository.get(name)

    def post(self, body):
        valid = Validator(schema)
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
