from utils.responce.responce import Response
from resourse.repositories.AdminTeamRepositories import AdminTeamRepositories
from resourse.services.Services import Services
from resourse.validator.TeamValidate import create, update, updateName


class AdminTeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminTeamRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def put(self, body: dict):
        res = self.valid.validation(update, body)

        if res:
            return self.repository.put(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def putUpdateName(self, id: str, body: dict):
        res = self.valid.validation(updateName, body)

        if res and id:
            return self.repository.putUpdateName(id, body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def deleteFromLeague(self, id: str):
        if id:
            return self.repository.deleteFromLeague(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__
