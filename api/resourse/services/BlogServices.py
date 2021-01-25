from resourse.repositories.BlogRepositories import BlogRepositories
from resourse.services.Services import Services


class BlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = BlogRepositories()

    def get(self):
        return self.repository.get()
