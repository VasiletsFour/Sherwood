from resourse.repositories.AdminRefereeRepositories import AdminRefereeRepositories
from resourse.services.Services import Services
from resourse.validator.RefereeValidate import create
from utils.responce.responce import Response


class AdminRefereeServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminRefereeRepositories()

    def post(self, body: dict):
        isValid = self.valid.validation(create, body)

        if isValid:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, id: str, body: dict):
        isValid = self.valid.validation(create, body)

        if isValid and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'})
