from math import ceil

from db.models.TeamsModel import Teams
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.serialization.TeamSerialization import teams_serialization
from resourse.serialization.TimeTableSerialization import time_tables_serialization
from utils.responce.responce import Response


class AdminTimeTableRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).filter(None == TimeTables.matchResult).join("place",
                                                                                                   isouter=True).all()
            serialization = time_tables_serialization.dump(timeTable)

            return Response(200, {'data': serialization})
        except AttributeError:
            return Response(400, {'error': "Team get error"})

    def post(self, body: dict):
        teams = self.session.query(Teams).filter(Teams.league_id == body["league_id"]).order_by(Teams.id.desc())
        serialization = teams_serialization.dump(teams)

        result = []
        isHost = True

        if len(serialization) % 2 == 1: serialization.append(False)

        for i in range(len(serialization) - 1):
            teamsCount = len(serialization)

            if i > 0:
                lastChild = serialization[teamsCount - 1]

                isHost = not isHost

                serialization.remove(lastChild)
                serialization.insert(1, lastChild)

            for k in range(ceil(len(serialization) / 2)):
                if serialization[k] == False or serialization[teamsCount - k - 1] == False: continue

                host = serialization[k] if isHost else serialization[teamsCount - k - 1]
                guest = serialization[teamsCount - k - 1] if isHost else serialization[k]

                result.append(TimeTables(host["id"], guest["id"], i + 1))

        self.session.bulk_save_objects(result)
        self.session.commit()

        return Response(status=201, message={'data': "Create"})

    def put(self, id, body):
        self.session.query(TimeTables).filter(TimeTables.id == id).update(body)
        self.session.commit()

        return Response(status=201, message={'data': 'Update'})
