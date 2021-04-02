from db.connect.connect import db


class Players(db.Model):
    __tablename__ = 'Players'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    team_id = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)

    def __init__(self, name: str, team_id: int):
        self.name = name
        self.team_id = team_id
