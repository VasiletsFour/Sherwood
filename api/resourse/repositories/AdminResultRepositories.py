from db.models.TeamsModel import Teams
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TimeTableSchema import time_tables_schema
from utils.responce.responce import Response


class AdminResultRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(
                TimeTables.date > self.timeStamp).all()
            schema = time_tables_schema.dump(timeTable)

            return Response(status=200, message={'data': schema}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "Team get error"}).__dict__

    def post(self, body: dict):
        team = Teams(**body)

        self.session.add(team)
        self.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    def put(self, body: object):
        self.session.query(Teams).filter(Teams.id.in_(body["teams"])).update(dict(league_id=body["league_id"]),
                                                                             synchronize_session=False)
        self.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    def putUpdateName(self, id: str, body: dict):
        self.session.query(Teams).filter(Teams.id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    def deleteFromLeague(self, id: str):
        self.session.query(Teams).filter(Teams.id == id).update({'league_id': None})
        self.session.commit()

        return Response(status=200, message={'data': 'Delete team'}).__dict__

    def delete(self, id: str):
        self.session.query(Teams).filter(Teams.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
