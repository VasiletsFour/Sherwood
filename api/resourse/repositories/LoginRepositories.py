from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from utils.errorExcept.erroExcept import UserNotFound, InvalidPassword, EmailNotConfirm, BanAccount
from utils.responce.responce import Response


class LoginRepositories(Repositories):
    def post(self, body: dict):
        try:
            user = self.session.query(Users).filter(Users.email == body["email"]).first()

            if not user: raise UserNotFound()
            if user.__dict__["ban"]: raise BanAccount()
            if not user.__dict__["confirmEmail"]: raise EmailNotConfirm()

            checkPass = self.checkPass(body["password"], user.__dict__["password"])

            if not checkPass: raise InvalidPassword()

            token = self.getToken(user.__dict__["id"], user.__dict__["role"])

            return Response(status=201, message={'data': token}).__dict__
        except UserNotFound:
            return Response(status=404, message={'error': UserNotFound.text}).__dict__
        except InvalidPassword:
            return Response(status=400, message={'error': InvalidPassword.text}).__dict__
        except EmailNotConfirm:
            return Response(status=400, message={'error': EmailNotConfirm.text}).__dict__
        except BanAccount:
            return Response(status=400, message={'error': BanAccount.text}).__dict__
