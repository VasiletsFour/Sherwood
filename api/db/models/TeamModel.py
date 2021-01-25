from db.connect.connect import db


class Team(db.Model):
    __tablename__ = 'Teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    league_id = db.Column(db.Integer, db.ForeignKey('Leagues.id'), nullable=False)
    league = db.relationship("Leagues", backref=db.backref("league", lazy=True))

    def __init__(self, name, league_id):
        self.name = name
        self.league_id = league_id
