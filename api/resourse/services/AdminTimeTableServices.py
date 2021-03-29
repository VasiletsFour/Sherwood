from utils.responce.responce import Response
from resourse.repositories.AdminTimeTableRepositories import AdminTimeTableRepositories
from resourse.services.Services import Services
from resourse.validator.TimeTableValidate import create


class AdminTimeTableServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminTimeTableRepositories()

    # def get(self, league_id: str):
    #     return self.repository.get(league_id)

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    # def put(self, body: dict):
    #     res = self.valid.validation(update, body)
    #
    #     if res:
    #         return self.repository.put(body)
    #
    #     return Response(status=400, message={'error': 'Not valid'}).__dict__

    # def putUpdateName(self, id: str, body: dict):
    #     res = self.valid.validation(updateName, body)
    #
    #     if res and id:
    #         return self.repository.putUpdateName(id, body)
    #
    #     return Response(status=400, message={'error': 'Not valid'}).__dict__
    #
    # def deleteFromLeague(self, id: str):
    #     if id:
    #         return self.repository.deleteFromLeague(id)
    #
    #     return Response(status=400, message={'error': 'Not valid'}).__dict__
    #
    # def delete(self, id: str):
    #     if id:
    #         return self.repository.delete(id)
    #
    #     return Response(status=400, message={'error': 'Not valid'}).__dict__
