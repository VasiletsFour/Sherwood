from db.connect.connect import db


class TimeTables(db.Model):
    __tablename__ = 'TimeTables'

    id = db.Column(db.Integer, primary_key=True)
    host = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)
    guest = db.Column(db.Integer, db.ForeignKey('Teams.id'), nullable=False)
    tour = db.Column(db.Integer,  nullable=False)
    date = db.Column(db.Integer)

    def __init__(self, host, guest, tour, date):
        self.host = host
        self.guest = guest
        self.tour = tour
        self.date = date
