from resourse.repositories.AdminTeamRepositories import AdminTeamRepositories
from resourse.services.Services import Services
from resourse.validator.TeamValidate import create, update, updateName
from utils.responce.responce import Response


class AdminTeamServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminTeamRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body: dict):
        isValid = self.valid.validation(create, body)

        if isValid:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'})

    def put(self, body: dict):
        isValid = self.valid.validation(update, body)

        if isValid:
            return self.repository.put(body)

        return Response(status=400, message={'error': 'Not valid'})

    def putUpdateName(self, id: str, body: dict):
        isValid = self.valid.validation(updateName, body)

        if isValid and id:
            return self.repository.putUpdateName(id, body)

        return Response(status=400, message={'error': 'Not valid'})

    def deleteFromLeague(self, id: str):
        if id:
            return self.repository.deleteFromLeague(id)

        return Response(status=400, message={'error': 'Not valid'})

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'})
