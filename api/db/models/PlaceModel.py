from db.connect.connect import db


class Places(db.Model):
    __tablename__ = 'Places'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    timeTable = db.relationship("TimeTables", backref="place")

    def __init__(self, name: str):
        self.name = name
