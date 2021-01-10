from run import db


class Seasons(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    date = db.Column(db.Integer, unique=True, nullable=False)

    def __init__(self, name, date):
        self.name = name
        self.date = date

