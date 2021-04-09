from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.ResultSchema import results_schema
from utils.responce.responce import Response


class ResultRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(
                TimeTables.date > self.timeStamp, TimeTables.status.is_(None),
                TimeTables.matchResult != None).order_by(
                TimeTables.tour,
                Places.name).all()

            schema = results_schema.dump(timeTable)

            return Response(status=200, message={'data': schema}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"}).__dict__
