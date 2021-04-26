from db.connect.connect import db


class TimeTables(db.Model):
    __tablename__ = 'TimeTables'

    id = db.Column(db.Integer, primary_key=True)
    host_id = db.Column(db.Integer, db.ForeignKey('Teams.id'))
    guest_id = db.Column(db.Integer, db.ForeignKey('Teams.id'))
    tour = db.Column(db.String(20), nullable=False)
    place_id = db.Column(db.Integer, db.ForeignKey('Places.id'))
    status = db.Column(db.String(30))
    date = db.Column(db.Integer)

    matchResult = db.relationship("MatchResult", uselist=False, back_populates="timeTables")

    host = db.relationship("Teams", foreign_keys=[host_id])
    guest = db.relationship("Teams", foreign_keys=[guest_id])

    def __init__(self, host: int, guest: int, tour: int, date: int = None, place_id: int = None):
        self.host_id = host
        self.guest_id = guest
        self.tour = tour
        self.date = date
        self.place_id = place_id
