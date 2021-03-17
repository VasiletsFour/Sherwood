from common.responce.responce import Response
from resourse.repositories.AdminRefereeRepositories import AdminRefereeRepositories
from resourse.services.Services import Services
from resourse.validator.RefereeValidate import create


class AdminRefereeServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminRefereeRepositories()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def put(self, id: str, body: dict):
        res = self.valid.validation(create, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__