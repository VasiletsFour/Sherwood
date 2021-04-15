from resourse.controller.Controller import Controller
from resourse.services.BlogServices import BlogServices


class Blogs(Controller):
    def __init__(self):
        super().__init__()
        self.service = BlogServices()

    def get(self):
        service = self.service.get(search=self.search, beforeDate=self.beforeDate, fromDate=self.fromDate)

        return service.message, service.status
