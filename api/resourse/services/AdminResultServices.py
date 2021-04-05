from resourse.repositories.AdminResultRepositories import AdminResultRepositories
from resourse.services.Services import Services
from resourse.validator.ResultValidate import create, update
from utils.responce.responce import Response


class AdminResultServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminResultRepositories()

    def get(self):
        return self.repository.get()

    def post(self, body: dict):
        res = self.valid.validation(create, body)

        if (body["homeResult"] == "win" and body["visitorsResult"] != "lose"
                or body["visitorsResult"] == "win" and body["homeResult"] != "lose"
                or body["visitorsResult"] == "draw" and body["homeResult"] != body["visitorsResult"]):
            return Response(status=400, message={'error': 'Not valid'}).__dict__

        if res:
            return self.repository.post(body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def put(self, id: str, body: dict):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Not valid'}).__dict__
