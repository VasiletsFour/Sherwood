from common.bcrypt.bcrypt import BcryptPass
from common.errorExcept.erroExcept import UserNotFound, InvalidPassword, EmailNotConfirm, BanAccount
from common.responce.responce import Response
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

            if not user: raise UserNotFound()
            if user.__dict__["ban"]: raise BanAccount()
            if not user.__dict__["confirmEmail"]: raise EmailNotConfirm()

            checkPass = self.bcrypt.checkPass(body["password"], user.__dict__["password"])

            if not checkPass: raise InvalidPassword()

            token = self.token.getToken(user.__dict__["id"], user.__dict__["role"])

            return Response(status=201, message={'data': token}).__dict__
        except UserNotFound:
            return Response(status=404, message={'error': UserNotFound.text}).__dict__
        except InvalidPassword:
            return Response(status=400, message={'error': InvalidPassword.text}).__dict__
        except EmailNotConfirm:
            return Response(status=400, message={'error': EmailNotConfirm.text}).__dict__
        except BanAccount:
            return Response(status=400, message={'error': BanAccount.text}).__dict__
