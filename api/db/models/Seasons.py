from db.connect.connect import db
from common.timestemp.timestamp import TimeStamp


class Seasons(db.Model):
    __tablename__ = 'Seasons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    date = db.Column(db.Integer, unique=True, nullable=False)

    def __init__(self, name):
        self.name = name
        self.date = TimeStamp().toTimeStamp()