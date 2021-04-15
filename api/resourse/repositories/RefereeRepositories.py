from db.models.RefereeModel import Referees
from resourse.repositories.Repositories import Repositories
from resourse.scheam.RefereeScheama import referees_schema
from utils.responce.responce import Response


class RefereeRepositories(Repositories):
    def get(self):
        referee = self.session.query(Referees).all()
        schema = referees_schema.dump(referee)

        return Response(status=200, message={'data': schema})
