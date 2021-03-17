from common.responce.responce import Response
from common.token.token import Token
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.AdminUserSchema import admin_users_schema


class AdminUserRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    def get(self, auth: str):
        authToken = self.token.decodeToken(auth)
        users = db.session.query(Users).filter(Users.confirmEmail == True, Users.id != authToken["id"]).all()
        schema = admin_users_schema.dump(users)

        return Response(status=200, message={'data': schema}).__dict__

    @staticmethod
    def put(id: str, body: dict):
        db.session.query(Users).filter(Users.id == id).update(dict(**body))
        db.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Users).filter(Users.id == id).delete()
        db.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
