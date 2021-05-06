from db.connect.connect import db


class MatchResult(db.Model):
    __tablename__ = 'MatchResult'

    id = db.Column(db.Integer, primary_key=True)
    goal_host = db.Column(db.Integer)
    goal_guest = db.Column(db.Integer)
    status_host = db.Column(db.String(15), nullable=False)
    status_guest = db.Column(db.String(15), nullable=False)
    match_id = db.Column(db.Integer, db.ForeignKey('TimeTables.id'), unique=True, nullable=False)

    timeTables = db.relationship("TimeTables", back_populates="matchResult")


    def __init__(self, match_id: str, goal_host: int, goal_guest: int, status_host: str, status_guest: str):
        self.match_id = match_id
        self.goal_host = goal_host
        self.goal_guest = goal_guest
        self.status_host = status_host
        self.status_guest = status_guest
