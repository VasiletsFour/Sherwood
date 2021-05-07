from db.models.MatchResultModel import MatchResult
from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.serialization.ResultSerialization import results_serialization
from utils.responce.responce import Response


class AdminResultRepositories(Repositories):
    def get(self):
        try:
            filters = (TimeTables.date > self.timeStamp, TimeTables.status == None)
            orders = (TimeTables.tour, Places.name)

            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(*filters).order_by(
                *orders).all()
            serialization = results_serialization.dump(timeTable)

            return Response(status=200, message={'data': serialization})
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"})

    def post(self, body: dict):
        matchResult = MatchResult(**body)

        self.session.add(matchResult)
        self.session.commit()

        return Response(status=201, message={'data': 'create'})

    def put(self, id: str, body: dict):
        self.session.query(MatchResult).filter(MatchResult.match_id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'})

    def delete(self, id: str):
        self.session.query(MatchResult).filter(MatchResult.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
