from resourse.repositories.BlogRepositories import BlogRepositories
from resourse.services.Services import Services
from resourse.validator.QueryValidate import query
from utils.responce.responce import Response
from utils.timestemp.timestamp import TimeStamp


class BlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = BlogRepositories()
        self.timeStamp = TimeStamp()

    def get(self, **kwargs):
        isValid = self.valid.validation(query, kwargs)

        if isValid:
            return self.repository.get(kwargs["search"], kwargs["beforeDate"], kwargs["fromDate"])

        return Response(status=400, message={'error': 'Invalid query'})
