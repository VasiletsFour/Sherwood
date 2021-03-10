from common.timestemp.timestamp import TimeStamp
from db.connect.connect import db


class Seasons(db.Model):
    __tablename__ = 'Seasons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    date = db.Column(db.Integer, unique=True, nullable=False)
    active = db.Column(db.Boolean, default=True)
    leagues = db.relationship("Leagues", backref="season")

    def __init__(self, name):
        self.name = name
        self.date = TimeStamp().toTimeStamp()
