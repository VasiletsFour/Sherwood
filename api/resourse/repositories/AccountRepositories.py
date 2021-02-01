from marshmallow import post_dump

from common.responce.responce import Responce
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.UserSchema import user_schema


class AccountRepositories(Repositories):
    @staticmethod
    def get():
        user = db.session.query(Users).first()
        schema = user_schema.dump(user)

        return Responce(200, {'data': schema}).__dict__
