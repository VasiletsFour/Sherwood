from db.models.BlogModel import Blogs
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.serialization.BlogSerialization import blogs_serialization
from utils.responce.responce import Response


class BlogRepositories(Repositories):
    def get(self, title, before_date, from_date):
        search = True
        beforeDate = True
        fromDate = True

        if title:
            search = Blogs.title.like(title + "%")

        if before_date:
            beforeDate = Blogs.date <= self.timeStamp.fromIsoToTimeStamp(before_date)

        if from_date:
            fromDate = Blogs.date >= self.timeStamp.fromIsoToTimeStamp(from_date)

        filters = (Blogs.author_id == Users.id, search, beforeDate, fromDate)
        quires = (Blogs.id, Blogs.title, Blogs.tags, Blogs.text, Blogs.date,
                  (Users.surname + " " + Users.firstname).label("author"))

        blogs = self.session.query(*quires).filter(*filters).order_by(Blogs.date.desc()).join(Users).all()
        count = self.session.query(*quires).count()

        serialization = blogs_serialization.dump(blogs)

        return Response(status=200, message={'data': {'list': serialization, 'count': count}})
