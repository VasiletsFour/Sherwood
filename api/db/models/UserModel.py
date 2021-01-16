from db.connect.connect import db


class TimeTables(db.Model):
    __tablename__ = 'Users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    surname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    confirmEmail = db.Column(db.Boolean, default=False, nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey('Players.id'))

    def __init__(self, name, surname, email, password):
        self.name = name
        self.surname = surname
        self.email = email
        self.password = password
