from resourse.repositories.AdminSeasoneRepositories import AdminSeasonRepositories
from resourse.services.Services import Services
from resourse.validator.SeasonValidate import schema
from utils.responce.responce import Response


class AdminSeasonServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminSeasonRepositories()

    def post(self, body: dict):
        isValid = self.valid.validation(schema, body)

        if isValid:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, id: str, body: dict):
        isValid = self.valid.validation(schema, body)

        if isValid and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})

    def delete(self, id: int):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'})
