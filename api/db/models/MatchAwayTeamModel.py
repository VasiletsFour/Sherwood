from db.connect.connect import db


class MatchAwayTeams(db.Model):
    __tablename__ = 'MatchAwayTeams'

    id = db.Column(db.Integer, primary_key=True)
    goal_for = db.Column(db.Integer)
    status = db.Column(db.String(15), nullable=False)
    match_id = db.Column(db.Integer, db.ForeignKey('TimeTables.id'), unique=True, nullable=False)
    timeTables = db.relationship("TimeTables", back_populates="matchAwayTeams")

    def __init__(self, match_id: str, goal_for: int, status: str):
        self.match_id = match_id
        self.goal_for = goal_for
        self.status = status
