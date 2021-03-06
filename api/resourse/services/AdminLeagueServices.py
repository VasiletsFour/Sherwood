from resourse.repositories.AdminLeagueRepositories import AdminLeagueRepositories
from resourse.services.Services import Services
from resourse.validator.LeagueValidate import update, create
from utils.responce.responce import Response


class AdminLeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminLeagueRepositories()

    def post(self, body: dict):
        isValid = self.valid.validation(create, body)

        if isValid:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Invalid League Create'})

    def put(self, body: dict):
        isValid = self.valid.validation(update, body)

        if isValid:
            return self.repository.put(body)

        return Response(status=400, message={'error': 'Failed League update'})

    def delete(self, id):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Failed League delete'})
