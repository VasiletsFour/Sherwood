from resourse.repositories.AdminPlayerRepositories import AdminPlayerRepositories
from resourse.services.Services import Services
from resourse.validator.PlayerValidate import create, update
from utils.responce.responce import Response


class AdminPlayerServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminPlayerRepositories()

    def get(self, search=None):
        return self.repository.get(search)

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, id: str, body: dict):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'})
