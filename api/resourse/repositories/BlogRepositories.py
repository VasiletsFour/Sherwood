from common.responce.responce import Responce
from common.token.token import checkToken, getConfirmToken
from db.connect.connect import db
from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories
from resourse.scheam.BlogSchema import blogs_schema


class BlogRepositories(Repositories):
    @staticmethod
    def get():
        try:
            blogs = db.session.query(Blogs).all()
            schema = blogs_schema.dump(blogs)

            return Responce(200, {'data': schema}).__dict__()
        except:
            return Responce(400, {'error': 'Get Error'}).__dict__()

    @staticmethod
    def post(body: object, token: str):
        try:
            check = checkToken(token)

            blog = Blogs(**body, author_id=check["id"])

            db.session.add(blog)
            db.session.commit()

            return Responce(201, {'data': 'create'}).__dict__()
        except:
            return Responce(400, {'error': 'Create Error'}).__dict__()

    @staticmethod
    def put(id: str, body: object):
        try:
            blog = Blogs.query.filter(Blogs.id == id)
            blog.update(dict(**body))

            db.session.commit()

            return Responce(200, {'data': 'update'}).__dict__()
        except:
            return Responce(400, {'error': 'Update Error'}).__dict__()

    @staticmethod
    def delete(id: str):
        try:
            db.session.query(Blogs).filter(Blogs.id == id).delete()
            db.session.commit()

            return Responce(200, {'data': 'Delete'}).__dict__()
        except:
            return Responce(400, {'error': 'Delete Error'}).__dict__()
