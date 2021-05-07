from resourse.repositories.AdminTimeTableRepositories import AdminTimeTableRepositories
from resourse.services.Services import Services
from resourse.validator.TimeTableValidate import create, update
from utils.responce.responce import Response


class AdminTimeTableServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminTimeTableRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body: dict):
        isValid = self.valid.validation(create, body)

        if isValid:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, id, body):
        isValid = self.valid.validation(update, body)

        if isValid and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})
