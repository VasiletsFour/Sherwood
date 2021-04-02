from db.connect.connect import db


class Teams(db.Model):
    __tablename__ = 'Teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    league_id = db.Column(db.Integer, db.ForeignKey('Leagues.id'))
    players = db.relationship("Players", backref="team")

    def __init__(self, name: str):
        self.name = name
