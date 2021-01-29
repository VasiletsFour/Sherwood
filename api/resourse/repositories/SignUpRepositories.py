from operator import __getitem__
from smtplib import SMTPRecipientsRefused

from jwt import ExpiredSignatureError, DecodeError
from sqlalchemy.exc import IntegrityError

from common.bcrypt.bcrypt import BcryptPass
from common.emailSend.emailSend import SendEmail
from common.responce.responce import Responce
from common.token.token import Token
from db.connect.connect import db
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories


class SignUpRepositories(Repositories):
    def __init__(self):
        self.bcrypt = BcryptPass()
        self.token = Token()

    def get(self, token: str):
        try:
            decode_token = self.token.decode(token)
            user = db.session.query(Users).filter(Users.email == decode_token["user"], Users.confirmEmail == False)
            user.update(dict(confirmEmail=True))

            db.session.commit()

            return Responce(201, {'data': decode_token}).__dict__
        except ExpiredSignatureError:
            return Responce(400, {'error': 'Token Expired'}).__dict__
        except DecodeError:
            return Responce(400, {'error': 'Not a token'}).__dict__

    def post(self, body: {__getitem__}):
        try:
            body["password"] = self.bcrypt.passHash(body["password"])

            user = Users(**body)
            token = self.token.getConfirmToken(body["email"])

            db.session.add(user)
            db.session.commit()

            SendEmail(body["email"], token)

            return Responce(201, {'data': "Please, confirm email"}).__dict__
        except IntegrityError:
            return Responce(400, {'error': 'User with this email already exists'}).__dict__
        except AttributeError:
            return Responce(400, {'error': "Try again"}).__dict__
        except SMTPRecipientsRefused:
            return Responce(400, {'error': "Invalid email"}).__dict__
