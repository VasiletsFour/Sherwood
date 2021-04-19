from db.connect.connect import db


class Scorers(db.Model):
    __tablename__ = 'Scorers'

    id = db.Column(db.Integer, primary_key=True)
    own_goal = db.Column(db.Boolean, default=False)

    match_id = db.Column(db.Integer, db.ForeignKey('TimeTables.id'), unique=True, nullable=False)
    player_id = db.Column(db.Integer, db.ForeignKey('Players.id'), unique=True, nullable=False)

    timeTables = db.relationship("TimeTables", back_populates="scorers")
    player = db.relationship("Players", back_populates="scorers")

    def __init__(self, match_id: int, player_id: int, status: str):
        self.match_id = match_id
        self.status = status
        self.player_id = player_id
