from common.responce.responce import Responce
from db.connect.connect import db
from db.models.BlogModel import Blogs
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.AdminUserSchema import admin_users_schema


class AdminUserRepositories(Repositories):
    @staticmethod
    def get():
        users = db.session.query(Users).filter(Users.confirmEmail == True).all()
        schema = admin_users_schema.dump(users)

        return Responce(200, {'data': schema}).__dict__

    @staticmethod
    def put(id: str, body: dict):
        db.session.query(Blogs).filter(id == id).update(dict(**body))
        db.session.commit()

        return Responce(200, {'data': 'update'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Blogs).filter(Blogs.id == id).delete()
        db.session.commit()

        return Responce(200, {'data': 'Delete'}).__dict__
