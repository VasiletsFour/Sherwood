from db.connect.connect import db


class TeamStatistics(db.Model):
    __tablename__ = 'TeamStatistics'

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)
    goal_for = db.Column(db.Integer)
    goal_against = db.Column(db.Integer)
    points = db.Column(db.Integer)
    win = db.Column(db.Integer)
    draw = db.Column(db.Integer)
    lose = db.Column(db.Integer)
    previous_position = db.Column(db.Integer)

    def __init__(self, team_id, goal_for, goal_against, points, win, draw, lose, previous_position):
        self.team_id = team_id
        self.goal_for = goal_for
        self.goal_against = goal_against
        self.points = points
        self.win = win
        self.draw = draw
        self.lose = lose
        self.previous_position = previous_position
