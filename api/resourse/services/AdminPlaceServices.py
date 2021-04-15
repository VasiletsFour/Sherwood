from resourse.repositories.AdminPlaceRepositories import AdminPlaceRepositories
from resourse.services.Services import Services
from resourse.validator.PlaceValidate import create
from utils.responce.responce import Response


class AdminPlaceServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminPlaceRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Invalid Place Create'})

    def put(self, id, body: dict):
        res = self.valid.validation(create, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Failed Place update'})

    def delete(self, id):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Failed Place delete'})
