from common.responce.responce import Response
from db.connect.connect import db
from db.models.RefereeModel import Referees
from resourse.repositories.Repositories import Repositories
from resourse.scheam.RefereeScheama import referees_schema


class RefereeRepositories(Repositories):
    @staticmethod
    def get():
        referee = db.session.query(Referees).all()
        schema = referees_schema.dump(referee)

        return Response(status=200, message={'data': schema}).__dict__
