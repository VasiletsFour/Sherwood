from db.connect.connect import db


class TeamStatistics(db.Model):
    __tablename__ = 'TeamStatistics'

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('Team.id'), nullable=False)
    goals = db.Column(db.Integer)
    missed = db.Column(db.Integer)
    points = db.Column(db.Integer)
    win = db.Column(db.Integer)
    draw = db.Column(db.Integer)
    lose = db.Column(db.Integer)

    def __init__(self, team_id, goals, missed, points, win, draw, lose):
        self.team_id = team_id
        self.goals = goals
        self.missed = missed
        self.points = points
        self.win = win
        self.draw = draw
        self.lose = lose
