from db.connect.connect import db


class PlayersStatistics(db.Model):
    __tablename__ = 'PlayersStatistics'

    id = db.Column(db.Integer, primary_key=True)
    player_id = db.Column(db.Integer, db.ForeignKey('Players.id'), nullable=False)
    goals = db.Column(db.Integer)

    def __init__(self, name, player_id, team_id):
        self.name = name
        self.player_id = player_id
        self.team_id = team_id
