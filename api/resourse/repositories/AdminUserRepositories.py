from sqlalchemy import or_, desc

from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.serialization.AdminUserSerialization import admin_users_serialization
from utils.responce.responce import Response


class AdminUserRepositories(Repositories):
    def get(self, token: dict, search, sort_by, kind):
        sort = True
        filters = or_(Users.surname.like(search + "%"), Users.email.like(search + "%"),
                      Users.firstname.like(search + "%")) if search else True

        if sort_by and kind: sort = (desc(sort_by)) if kind == "asc" else sort_by

        users = self.session.query(Users).filter(Users.confirmEmail == True, Users.id != token["id"], filters).order_by(
            sort).all()
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
