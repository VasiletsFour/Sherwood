from smtplib import SMTPRecipientsRefused

from jwt import ExpiredSignatureError
from sqlalchemy.exc import IntegrityError

from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from utils.emailSend.emailSend import SendEmail
from utils.responce.responce import Response


class SignUpRepositories(Repositories):
    def get(self, token: dict):
        try:
            user = self.session.query(Users).filter(Users.email == token["user"], Users.confirmEmail == False)
            user.update(dict(confirmEmail=True))

            self.session.commit()

            return Response(status=201, message={'data': "Account Confirm"})
        except ExpiredSignatureError:
            return Response(status=400, message={'error': 'Token Expired'})
        except AssertionError:
            return Response(status=400, message={"error": 'Not a token'})

    def post(self, body: dict):
        try:
            user = Users(**body)
            token = self.getConfirmToken(body["email"])

            self.session.add(user)
            self.session.commit()

            SendEmail(body["email"], token)

            return Response(status=201, message={'data': "Please, confirm email"})
        except IntegrityError:
            return Response(status=400, message={'error': 'User with this email already exists'})
        except AttributeError:
            return Response(status=400, message={'error': "Try again"})
        except SMTPRecipientsRefused:
            return Response(status=400, message={'error': "Invalid email"})
