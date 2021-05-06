from db.models.BlogModel import Blogs
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.serialization.BlogSerialization import blogs_serialization
from utils.responce.responce import Response


class BlogRepositories(Repositories):
    def get(self, **kwargs):
        quires = (Blogs.id, Blogs.title, Blogs.tags, Blogs.text, Blogs.date,
                  (Users.surname + " " + Users.firstname).label("author"))
        filters = (Blogs.author_id == Users.id, kwargs["search"], kwargs["beforeDate"], kwargs["fromDate"])

        blogs = self.session.query(*quires).filter(*filters).order_by(Blogs.date.desc()).join(Users).all()
        count = self.session.query(*quires).count()

        serialization = blogs_serialization.dump(blogs)

        return Response(status=200, message={'data': {'list': serialization, 'count': count}})
