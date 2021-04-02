from db.connect.connect import db


class Referees(db.Model):
    __tablename__ = 'Referees'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    def __init__(self, name: str):
        self.name = name
