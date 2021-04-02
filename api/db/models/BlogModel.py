from db.connect.connect import db
from utils.timestemp.timestamp import TimeStamp


class Blogs(db.Model):
    __tablename__ = 'Blogs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    tags = db.Column(db.PickleType, nullable=False)
    text = db.Column(db.String(500), nullable=False)
    date = db.Column(db.Integer, unique=True, nullable=False)
    # img = db.Column(db.String(700), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('Users.id'), nullable=False)

    def __init__(self, title: str, tags, text: str, author_id: int):
        self.title = title
        self.tags = tags
        self.text = text
        self.date = TimeStamp().toTimeStamp()
        self.author_id = author_id
