from common.bcrypt.bcrypt import BcryptPass
from db.connect.connect import db

bcrypt = BcryptPass()


class Users(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(30), nullable=False)
    surname = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    b_day = db.Column(db.Integer, nullable=True)
    number = db.Column(db.Integer, nullable=True)
    password = db.Column(db.String(250), nullable=False)
    confirmEmail = db.Column(db.Boolean, default=False, nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey('Players.id'), nullable=True)

    def __init__(self, firstname, surname, email, password):
        self.firstname = firstname
        self.surname = surname
        self.email = email
        self.password = bcrypt.passHash(password)
