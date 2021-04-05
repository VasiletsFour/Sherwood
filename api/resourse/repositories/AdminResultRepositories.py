from db.models.MatchAwayTeamModel import MatchAwayTeams
from db.models.MatchHomeTeamModel import MatchHomeTeams
from db.models.PlaceModel import Places
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.scheam.ResultSchema import results_schema
from utils.responce.responce import Response


class AdminResultRepositories(Repositories):
    def get(self):
        try:
            timeTable = self.session.query(TimeTables).join("place", isouter=True).filter(
                TimeTables.date > self.timeStamp, TimeTables.status == None).order_by(TimeTables.tour,
                                                                                      Places.name).all()
            schema = results_schema.dump(timeTable)

            return Response(status=200, message={'data': schema}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "AdminResult get error"}).__dict__

    def post(self, body: dict):
        result = [MatchHomeTeams(body["match"], body["goalHome"], body["homeResult"]),
                  MatchAwayTeams(body["match"], body["goalVisitors"], body["visitorsResult"])]

        self.session.bulk_save_objects(result)
        self.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    def put(self, id: str, body: dict):
        self.session.query(MatchHomeTeams).filter(MatchHomeTeams.id == id).update(
            dict(goal_for=body["goalHome"], status=body["homeResult"]),
            synchronize_session=False)
        self.session.query(MatchAwayTeams).filter(MatchAwayTeams.id == id).update(
            dict(dict(goal_for=body["goalVisitors"], status=body["visitorsResult"])),
            synchronize_session=False)
        self.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    def delete(self, id: str):
        self.session.query(MatchHomeTeams).filter(MatchHomeTeams.id == id).delete()
        self.session.query(MatchAwayTeams).filter(MatchAwayTeams.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
