from common.responce.responce import Responce
from common.token.token import Token
from db.connect.connect import db
from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories
from resourse.scheam.BlogSchema import blogs_schema


class BlogRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    @staticmethod
    def get():
        blogs = db.session.query(Blogs).all()
        schema = blogs_schema.dump(blogs)

        return Responce(200, {'data': schema}).__dict__
