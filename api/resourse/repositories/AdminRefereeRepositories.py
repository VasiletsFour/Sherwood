from sqlalchemy.exc import IntegrityError

from db.models.RefereeModel import Referees
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class AdminRefereeRepositories(Repositories):
    def post(self, body: dict):
        try:
            referee = Referees(body["name"])

            self.session.add(referee)
            self.session.commit()

            return Response(status=201, message={'data': 'create'})
        except IntegrityError:
            return Response(status=400, message={'error': 'Referee with this name already exists'})

    def put(self, id: str, body: dict):
        try:
            self.session.query(Referees).filter(Referees.id == id).update(dict(name=body["name"]))
            self.session.commit()

            return Response(status=201, message={'data': 'update'})
        except IntegrityError:
            return Response(status=400, message={'error': 'Referee with this name already exists'})

    def delete(self, id: str):
        self.session.query(Referees).filter(Referees.id == id).delete()
        self.session.commit()

        return Response(status=201, message={'data': 'Delete'})
