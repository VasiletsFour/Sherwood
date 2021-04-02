from smtplib import SMTPRecipientsRefused

from jwt import ExpiredSignatureError, DecodeError
from sqlalchemy.exc import IntegrityError

from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from utils.emailSend.emailSend import SendEmail
from utils.responce.responce import Response


class SignUpRepositories(Repositories):
    def get(self, token: str):
        try:
            decode_token = self.decode(token)
            user = self.session.query(Users).filter(Users.email == decode_token["user"], Users.confirmEmail == False)
            user.update(dict(confirmEmail=True))

            self.session.commit()

            return Response(status=201, message={'data': "Account Confirm"}).__dict__
        except ExpiredSignatureError:
            return Response(status=400, message={'error': 'Token Expired'}).__dict__
        except DecodeError:
            return Response(status=400, message={'error': 'Not a token'}).__dict__

    def post(self, body: dict):
        try:
            user = Users(**body)
            token = self.getConfirmToken(body["email"])

            self.session.add(user)
            self.session.commit()

            SendEmail(body["email"], token)

            return Response(status=201, message={'data': "Please, confirm email"}).__dict__
        except IntegrityError:
            return Response(status=400, message={'error': 'User with this email already exists'}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "Try again"}).__dict__
        except SMTPRecipientsRefused:
            return Response(status=400, message={'error': "Invalid email"}).__dict__
