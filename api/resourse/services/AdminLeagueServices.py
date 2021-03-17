from common.responce.responce import Response
from resourse.repositories.AdminLeagueRepositories import AdminLeagueRepositories
from resourse.services.Services import Services
from resourse.validator.LeagueValidate import update, create


class AdminLeagueServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminLeagueRepositories()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Invalid League Create'}).__dict__

    def put(self, body: dict):
        res = self.valid.validation(update, body)

        if res:
            return self.repository.put(body)

        return Response(status=400, message={'error': 'Failed League update'}).__dict__

    def delete(self, id):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Failed League delete'}).__dict__
