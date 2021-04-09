from sqlalchemy import or_

from db.models.UserModel import Users
from resourse.repositories.AdminUserRepositories import AdminUserRepositories
from resourse.services.Services import Services
from resourse.validator.UserValidate import updateAdmin
from utils.responce.responce import Response


class AdminUserServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminUserRepositories()

    def get(self, token: str, search=None):
        filters = or_(Users.surname.like(search + "%"), Users.email.like(search + "%"),
                      Users.firstname.like(search + "%")) if search else True

        return self.repository.get(token, filters)

    def put(self, id: str, body: dict):
        res = self.valid.validation(updateAdmin, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__
