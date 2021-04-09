from db.models.MatchResultModel import MatchResult
from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.ResultSchema import results_schema
from utils.responce.responce import Response


class AdminResultRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(
                TimeTables.date > self.timeStamp, TimeTables.status.is_(None)).order_by(TimeTables.tour,
                                                                                        Places.name).all()

            schema = results_schema.dump(timeTable)

            return Response(status=200, message={'data': schema}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"}).__dict__

    def post(self, body: dict):
        matchResult = MatchResult(**body)

        self.session.add(matchResult)
        self.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    def put(self, id: str, body: dict):
        self.session.query(MatchResult).filter(MatchResult.match_id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    def delete(self, id: str):
        self.session.query(MatchResult).filter(MatchResult.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
