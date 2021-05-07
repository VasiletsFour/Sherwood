from resourse.repositories.BlogRepositories import BlogRepositories
from resourse.services.Services import Services
from utils.timestemp.timestamp import TimeStamp


class BlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = BlogRepositories()
        self.timeStamp = TimeStamp()

    def get(self, **kwargs):
        return self.repository.get(kwargs["search"], kwargs["beforeDate"], kwargs["fromDate"])
