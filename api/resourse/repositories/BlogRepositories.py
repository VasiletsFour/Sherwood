from db.models.BlogModel import Blogs
from resourse.repositories.Repositories import Repositories
from resourse.scheam.BlogSchema import blogs_schema
from utils.responce.responce import Response


class BlogRepositories(Repositories):
    def get(self, **kwargs):
        blogs = self.session.query(Blogs).filter(kwargs["search"], kwargs["beforeDate"], kwargs["fromDate"]).order_by(
            Blogs.date.desc()).all()
        schema = blogs_schema.dump(blogs)

        return Response(status=200, message={'data': schema}).__dict__
