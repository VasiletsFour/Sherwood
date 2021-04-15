from resourse.repositories.AdminTimeTableRepositories import AdminTimeTableRepositories
from resourse.services.Services import Services
from resourse.validator.TimeTableValidate import create, update
from utils.responce.responce import Response


class AdminTimeTableServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminTimeTableRepositories()

    def get(self, **kwargs):
        return self.repository.get()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, id, body):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})
