from db.models.RefereeModel import Referees
from resourse.repositories.Repositories import Repositories
from resourse.serialization.RefereeSerialization import referees_serialization
from utils.responce.responce import Response


class RefereeRepositories(Repositories):
    def get(self):
        referee = self.session.query(Referees).all()
        serialization = referees_serialization.dump(referee)

        return Response(status=200, message={'data': serialization})
