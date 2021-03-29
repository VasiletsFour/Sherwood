from utils.responce.responce import Response
from utils.token.token import Token
from db.connect.connect import db
from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories
from resourse.scheam.BlogSchema import blogs_schema


class BlogRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    @staticmethod
    def get(**kwargs):
        blogs = db.session.query(Blogs).filter(kwargs["search"], kwargs["beforeDate"], kwargs["fromDate"]).order_by(
            Blogs.date.desc()).all()
        schema = blogs_schema.dump(blogs)

        return Response(status=200, message={'data': schema}).__dict__
