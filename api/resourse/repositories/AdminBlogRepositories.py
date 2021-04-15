import werkzeug

from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class AdminBlogRepositories(Repositories):
    def get(self, file: werkzeug.datastructures.FileStorage, token: str):
        return Response(status=201, message={'data': 'Save file'})

    def post(self, body: dict, token: str):
        check = self.decode(token)

        blog = Blogs(**body, author_id=check["id"])

        self.session.add(blog)
        self.session.commit()

        return Response(status=201, message={'data': 'create'})

    def put(self, id: str, body: dict):
        self.session.query(Blogs).filter(Blogs.id == id).update(**body)
        self.session.commit()

        return Response(status=200, message={'data': 'update'})

    def delete(self, id: str):
        self.session.query(Blogs).filter(Blogs.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
