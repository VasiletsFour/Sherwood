from resourse.repositories.AdminSeasoneRepositories import AdminSeasonRepositories
from resourse.services.Services import Services
from resourse.validator.SeasonValidate import schema
from utils.responce.responce import Response


class AdminSeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminSeasonRepositories()

    def post(self, body: dict):
        res = self.valid.validation(schema, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def put(self, id: str, body: dict):
        res = self.valid.validation(schema, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def delete(self, id: int):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__
