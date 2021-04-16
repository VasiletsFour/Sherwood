from db.connect.connect import db
from utils.bcrypt.bcrypt import BcryptPass
from utils.timestemp.timestamp import TimeStamp
from utils.token.token import Token


class Repositories:
    def __init__(self):
        token = Token()

        self.session = db.session

        self.timeStamp = lambda: TimeStamp().toTimeStamp()

        self.getToken = lambda id, role: token.getToken(id, role)
        self.getConfirmToken = lambda email: token.getConfirmToken(email)

        self.checkPass = lambda body_pass, bd_pass: BcryptPass().checkPass(body_pass, bd_pass)
