import werkzeug

from common.responce.responce import Responce
from common.token.token import Token
from db.connect.connect import db
from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories


class AdminBlogRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    def get(self, file: werkzeug.datastructures.FileStorage, token: str):
        return Responce(201, {'data': 'Save file'}).__dict__

    def post(self, body: object, token: str):
        try:
            check = self.token.decodeToken(token)

            blog = Blogs(**body, author_id=check["id"])

            db.session.add(blog)
            db.session.commit()

            return Responce(201, {'data': 'create'}).__dict__
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__

    @staticmethod
    def put(id: str, body: object):
        try:
            blog = Blogs.query.filter(Blogs.id == id)
            blog.update(dict(**body))

            db.session.commit()

            return Responce(200, {'data': 'update'}).__dict__
        except:
            return Responce(400, {'error': 'Update Error'}).__dict__

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Blogs).filter(Blogs.id == id).delete()
            db.session.commit()

            return Responce(200, {'data': 'Delete'}).__dict__
        except:
            return Responce(400, {'error': 'Delete Error'}).__dict__
