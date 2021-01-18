from common.bcrypt.bcrypt import BcryptPass
from common.responce.responce import Responce
from common.token.token import getConfirmToken, checkToken
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.UserSchema import user_schema


class SignUpRepositories(Repositories):
    def __init__(self):
        self.bcrypt = BcryptPass()

    def get(self, token: str):
        try:
            user_id = checkToken(token)
            user = Users.query.filter(Users.id == user_id, Users.confirmEmail == False)
            user.update(dict(confirmEmail=True))

            db.session.commit()

            return Responce(200, {'data': "Email Confirm"}).__dict__()
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__()

    def post(self, body: object):
        try:
            user = Users(**body)
            db.session.add(user)
            db.session.commit()

            schema = user_schema(user)

            token = getConfirmToken(schema["id"])
            return Responce(201, {'data': token}).__dict__()
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__()
