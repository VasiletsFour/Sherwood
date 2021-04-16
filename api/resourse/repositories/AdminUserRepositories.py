from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.serialization.AdminUserSerialization import admin_users_serialization
from utils.responce.responce import Response


class AdminUserRepositories(Repositories):
    def get(self, auth: str, filters):
        authToken = self.decode(auth)
        users = self.session.query(Users).filter(Users.confirmEmail == True, Users.id != authToken["id"], filters).all()
        serialization = admin_users_serialization.dump(users)

        return Response(status=200, message={'data': serialization})

    def put(self, id: str, body: dict):
        self.session.query(Users).filter(Users.id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'})

    def delete(self, id: str):
        self.session.query(Users).filter(Users.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
