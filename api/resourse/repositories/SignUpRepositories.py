from smtplib import SMTPRecipientsRefused

from sqlalchemy.exc import IntegrityError

from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from utils.emailSend.emailSend import SendEmail
from utils.responce.responce import Response


class SignUpRepositories(Repositories):
    def post(self, body: dict):
        try:
            token = self.getConfirmToken(body["email"])
            user = Users(**body)

            SendEmail(body["email"], token)

            self.session.add(user)
            self.session.commit()

            return Response(status=201, message={'data': "Please, confirm email"})
        except IntegrityError:
            return Response(status=400, message={'error': 'User with this email already exists'})
        except AttributeError:
            return Response(status=400, message={'error': "Try again"})
        except SMTPRecipientsRefused:
            return Response(status=400, message={'error': "Invalid email"})
