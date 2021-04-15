from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TimeTableSchema import time_tables_schema
from utils.responce.responce import Response


class TimeTableRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).filter(None == TimeTables.matchResult).join("place").all()
            schema = time_tables_schema.dump(timeTable)

            return Response(200, {'data': schema})
        except AttributeError:
            return Response(400, {'error': "Team get error"})
