from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.serialization.ResultSerialization import results_serialization
from utils.responce.responce import Response


class ResultRepositories(Repositories):
    def get(self):
        try:
            filters = (TimeTables.date > self.timeStamp, TimeTables.status == None, None != TimeTables.matchResult)
            orders = (TimeTables.tour, Places.name)

            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(*filters).order_by(
                *orders).all()
            serialization = results_serialization.dump(timeTable)

            return Response(status=200, message={'data': serialization})
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"})
