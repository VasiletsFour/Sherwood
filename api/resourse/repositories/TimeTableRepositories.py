from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TimeTableSchema import time_tables_schema
from utils.responce.responce import Response


class TimeTableRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).join("place", isouter=True).all()
            schema = time_tables_schema.dump(timeTable)

            return Response(200, {'data': schema}).__dict__
        except AttributeError:
            return Response(400, {'error': "Team get error"}).__dict__
