from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from utils.errorExcept.erroExcept import UserNotFound, InvalidPassword, EmailNotConfirm, BanAccount
from utils.responce.responce import Response


class LoginRepositories(Repositories):
    def post(self, body: dict):
        try:
            user = self.session.query(Users.ban, Users.confirmEmail, Users.password, Users.id, Users.role).filter(
                Users.email == body["email"]).first()

            if not user: raise UserNotFound()
            if user.ban: raise BanAccount()
            if not user.confirmEmail: raise EmailNotConfirm()

            checkPass = self.checkPass(body["password"], user.password)

            if not checkPass: raise InvalidPassword()

            token = self.getToken(user.id, user.role)

            return Response(status=201, message={'data': token})
        except UserNotFound as err:
            return Response(status=404, message={'error': str(err)})
        except InvalidPassword as err:
            return Response(status=400, message={'error': str(err)})
        except EmailNotConfirm as err:
            return Response(status=400, message={'error': str(err)})
        except BanAccount as err:
            return Response(status=400, message={'error': str(err)})
