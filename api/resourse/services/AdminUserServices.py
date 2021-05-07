from resourse.repositories.AdminUserRepositories import AdminUserRepositories
from resourse.services.Services import Services
from resourse.validator.QueryValidate import query
from resourse.validator.UserValidate import updateAdmin
from utils.responce.responce import Response


class AdminUserServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminUserRepositories()

    def get(self, token, **kwargs):
        authToken = self.decode(token)
        isValid = self.valid.validation(query, kwargs)

        if authToken and isValid:
            return self.repository.get(authToken, kwargs["search"], kwargs["sortBy"], kwargs["kind"])

        return Response(status=400, message={'error': 'Invalid Token'})

    def put(self, id: str, body: dict):
        isValid = self.valid.validation(updateAdmin, body)

        if isValid and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'})

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'})
