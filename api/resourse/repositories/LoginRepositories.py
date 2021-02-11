from common.bcrypt.bcrypt import BcryptPass
from common.errorExcept.erroExcept import UserNotFound, InvalidPassword
from common.responce.responce import Responce
from common.token.token import Token
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories


class LoginRepositories(Repositories):
    def __init__(self):
        self.bcrypt = BcryptPass()
        self.token = Token()

    def post(self, body: object):
        try:
            user = db.session.query(Users).filter(Users.email == body["email"], Users.confirmEmail == True).first()

            if not user:
                raise UserNotFound()

            checkPass = self.bcrypt.checkPass(body["password"], user.__dict__["password"])

            if not checkPass:
                raise InvalidPassword()

            token = self.token.getToken(user.__dict__["id"], user.__dict__["role"])

            return Responce(201, {'data': token}).__dict__
        except UserNotFound:
            return Responce(404, {'error': UserNotFound.text}).__dict__
        except InvalidPassword:
            return Responce(400, {'error': InvalidPassword.text}).__dict__
#
