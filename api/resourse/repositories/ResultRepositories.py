from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.ResultSchema import results_schema
from utils.responce.responce import Response


class ResultRepositories(Repositories):
    def get(self):
        try:
            filters = (TimeTables.date > self.timeStamp, TimeTables.status == None, None != TimeTables.matchResult)
            orders = (TimeTables.tour, Places.name)
            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(*filters).order_by(
                *orders).all()
            schema = results_schema.dump(timeTable)

            return Response(status=200, message={'data': schema})
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"})
