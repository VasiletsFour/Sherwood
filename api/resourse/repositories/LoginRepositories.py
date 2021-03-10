from common.bcrypt.bcrypt import BcryptPass
from common.errorExcept.erroExcept import UserNotFound, InvalidPassword, EmailNotConfirm, BanAccount
from common.responce.responce import Responce
from common.token.token import Token
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories


class LoginRepositories(Repositories):
    def __init__(self):
        self.bcrypt = BcryptPass()
        self.token = Token()

    def post(self, body: dict):
        try:
            user = db.session.query(Users).filter(Users.email == body["email"]).first()

            if not user:
                raise UserNotFound()

            if not user.__dict__["confirmEmail"]:
                raise EmailNotConfirm()

            if user.__dict__["ban"]:
                raise BanAccount()

            checkPass = self.bcrypt.checkPass(body["password"], user.__dict__["password"])

            if not checkPass:
                raise InvalidPassword()

            token = self.token.getToken(user.__dict__["id"], user.__dict__["role"])

            return Responce(201, {'data': token}).__dict__
        except UserNotFound:
            return Responce(404, {'error': UserNotFound.text}).__dict__
        except InvalidPassword:
            return Responce(400, {'error': InvalidPassword.text}).__dict__
        except EmailNotConfirm:
            return Responce(400, {'error': EmailNotConfirm.text}).__dict__
        except BanAccount:
            return Responce(400, {'error': BanAccount.text}).__dict__
