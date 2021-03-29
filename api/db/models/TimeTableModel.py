from db.connect.connect import db


class TimeTables(db.Model):
    __tablename__ = 'TimeTables'

    id = db.Column(db.Integer, primary_key=True)
    league_id = db.Column(db.Integer, db.ForeignKey('Leagues.id'), nullable=False)
    host = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)
    guest = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)
    tour = db.Column(db.Integer, nullable=False)
    place = db.Column(db.String(100))
    status = db.Column(db.String(30))
    date = db.Column(db.Integer)

    def __init__(self, host, guest, tour, date):
        self.host = host
        self.guest = guest
        self.tour = tour
        self.date = date
