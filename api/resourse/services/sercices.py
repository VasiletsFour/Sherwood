from resourse.repositories.repositories import SeasonRepositories
from resourse.validator.validte import schema
from cerberus import Validator
from common.responce.responce import Responce


class SeasonServices:
    def __init__(self):
        self.repositorie = SeasonRepositories()

    def get(self, name):
        return self.repositorie.get(name)

    def post(self, body):
        valid = Validator(schema)
        res = valid.validate(body)

        if res:
            return self.repositorie.post(body)

        return Responce(400, 'Not valid').__dict__()

    def put(self, id, body):
        valid = Validator(schema)
        res = valid.validate(body)

        if res and id:
            return self.repositorie.put(id, body)

        return Responce(400, 'Not valid').__dict__()
