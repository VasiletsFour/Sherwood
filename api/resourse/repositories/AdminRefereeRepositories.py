from sqlalchemy.exc import IntegrityError

from utils.responce.responce import Response
from db.connect.connect import db
from db.models.RefereeModel import Referees
from resourse.repositories.Repositories import Repositories


class AdminRefereeRepositories(Repositories):
    @staticmethod
    def post(body: dict):
        try:
            referee = Referees(body["name"])

            db.session.add(referee)
            db.session.commit()

            return Response(status=201, message={'data': 'create'}).__dict__
        except IntegrityError:
            return Response(status=400, message={'error': 'Referee with this name already exists'}).__dict__

    @staticmethod
    def put(id: str, body: dict):
        try:
            db.session.query(Referees).filter(Referees.id == id).update(dict(name=body["name"]))
            db.session.commit()

            return Response(status=201, message={'data': 'update'}).__dict__
        except IntegrityError:
            return Response(status=400, message={'error': 'Referee with this name already exists'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Referees).filter(Referees.id == id).delete()
        db.session.commit()

        return Response(status=201, message={'data': 'Delete'}).__dict__
