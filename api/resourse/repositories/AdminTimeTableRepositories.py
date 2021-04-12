from math import ceil

from db.models.TeamsModel import Teams
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema
from resourse.scheam.TimeTableSchema import time_tables_schema
from utils.responce.responce import Response


class AdminTimeTableRepositories(Repositories):
    @property
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).filter(None == TimeTables.matchResult).join("place",
                                                                                                   isouter=True).all()
            schema = time_tables_schema.dump(timeTable)

            return Response(200, {'data': schema}).__dict__
        except AttributeError:
            return Response(400, {'error': "Team get error"}).__dict__

    def post(self, body: dict):
        teams = self.session.query(Teams).filter(Teams.league_id == body["league_id"]).order_by(Teams.id.desc())
        schema = teams_schema.dump(teams)

        result = []
        isHost = True

        if len(schema) % 2 == 1: schema.append(False)

        for i in range(len(schema) - 1):
            teamsCount = len(schema)

            if i > 0:
                lastChild = schema[teamsCount - 1]

                isHost = not isHost

                schema.remove(lastChild)
                schema.insert(1, lastChild)

            for k in range(ceil(len(schema) / 2)):
                if schema[k] == False or schema[teamsCount - k - 1] == False: continue

                host = schema[k] if isHost else schema[teamsCount - k - 1]
                guest = schema[teamsCount - k - 1] if isHost else schema[k]

                result.append(TimeTables(host["id"], guest["id"], i + 1))

        self.session.bulk_save_objects(result)
        self.session.commit()

        return Response(status=201, message={'data': "Create"}).__dict__

    def put(self, id, body):
        self.session.query(TimeTables).filter(TimeTables.id == id).update(body)
        self.session.commit()

        return Response(status=201, message={'data': 'Update'}).__dict__
