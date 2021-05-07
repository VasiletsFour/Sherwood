from sqlalchemy import func, case, and_
from sqlalchemy import or_, desc

from db.models.MatchResultModel import MatchResult
from db.models.TeamsModel import Teams
from db.models.TimeTableModel import TimeTables
from resourse.repositories.Repositories import Repositories
from resourse.serialization.TournamentTableSerialization import tournament_tables_serialization
from utils.responce.responce import Response


class TournamentTableRepositories(Repositories):
    def get(self):
        try:
            queries = (Teams.id, Teams.name, TimeTables, MatchResult,
                       func.sum(func.IF(Teams.id == TimeTables.host_id, MatchResult.status_host == "win",
                                        MatchResult.status_guest == "win")).label("win"),
                       func.sum(func.IF(Teams.id == TimeTables.host_id, MatchResult.status_host == "draw",
                                        MatchResult.status_guest == "draw")).label("draw"),
                       func.sum(func.IF(Teams.id == TimeTables.host_id, MatchResult.status_host == "lose",
                                        MatchResult.status_guest == "lose")).label("lose"),
                       func.sum(func.IF(Teams.id == TimeTables.host_id, MatchResult.goal_host,
                                        MatchResult.goal_guest)).label("goalFor"),
                       func.sum(func.IF(Teams.id == TimeTables.host_id, MatchResult.goal_guest,
                                        MatchResult.goal_host)).label("goalAgainst"),
                       func.sum(case(
                           [(and_(Teams.id == TimeTables.host_id, MatchResult.status_host == "win"), 3),
                            (and_(Teams.id == TimeTables.host_id, MatchResult.status_host == "draw"), 1),
                            (and_(Teams.id == TimeTables.guest_id, MatchResult.status_guest == "win"), 3),
                            (and_(Teams.id == TimeTables.guest_id, MatchResult.status_guest == "draw"), 1), ],
                           else_=0)).label("points"))

            filters = (
                or_(Teams.id == TimeTables.host_id, Teams.id == TimeTables.guest_id),
                TimeTables.id == MatchResult.match_id)

            orders = (desc("win"), desc("draw"), "lose", Teams.name, desc("goalFor"), "goalAgainst")

            tournamentTable = self.session.query(*queries).filter(*filters).group_by(Teams.id).order_by(*orders).all()

            serialization = tournament_tables_serialization.dump(tournamentTable)

            return Response(status=200, message={'data': serialization})
        except AttributeError:
            return Response(status=400, message={'error': "Team get error"})
