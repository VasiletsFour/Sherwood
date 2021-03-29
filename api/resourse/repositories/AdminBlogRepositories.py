import werkzeug

from utils.responce.responce import Response
from utils.token.token import Token
from db.connect.connect import db
from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories


class AdminBlogRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    def get(self, file: werkzeug.datastructures.FileStorage, token: str):
        return Response(status=201, message={'data': 'Save file'}).__dict__

    def post(self, body: dict, token: str):
        check = self.token.decodeToken(token)

        blog = Blogs(**body, author_id=check["id"])

        db.session.add(blog)
        db.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    @staticmethod
    def put(id: str, body: dict):
        blog = db.session.query(Blogs).filter(Blogs.id == id)
        blog.update(dict(**body))

        db.session.commit()

        return Response(status=200, message={'data': 'update'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Blogs).filter(Blogs.id == id).delete()
        db.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
