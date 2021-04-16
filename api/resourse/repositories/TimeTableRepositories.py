from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.serialization.TimeTableSerialization import time_tables_serialization
from utils.responce.responce import Response


class TimeTableRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).filter(None == TimeTables.matchResult).join("place").all()
            serialization = time_tables_serialization.dump(timeTable)

            return Response(200, {'data': serialization})
        except AttributeError:
            return Response(400, {'error': "Team get error"})
