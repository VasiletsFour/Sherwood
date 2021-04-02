from db.models.BlogModel import Blogs
from resourse.repositories.BlogRepositories import BlogRepositories
from resourse.services.Services import Services
from utils.timestemp.timestamp import TimeStamp


class BlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = BlogRepositories()
        self.timeStamp = TimeStamp()

    def get(self, **kwargs):
        search = True
        beforeDate = True
        fromDate = True

        if kwargs["search"]:
            search = Blogs.title.like(kwargs["search"] + "%")

        if kwargs["beforeDate"]:
            beforeDate = Blogs.date <= self.timeStamp.fromIsoToTimeStamp(kwargs["beforeDate"])

        if kwargs["fromDate"]:
            fromDate = Blogs.date >= self.timeStamp.fromIsoToTimeStamp(kwargs["fromDate"])

        return self.repository.get(search=search, beforeDate=beforeDate, fromDate=fromDate)
