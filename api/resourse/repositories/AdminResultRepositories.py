from db.models.MatchResultModel import MatchResult
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class AdminResultRepositories(Repositories):
    def post(self, body: dict):
        matchResult = MatchResult(**body)

        self.session.add(matchResult)
        self.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    def put(self, id: str, body: dict):
        self.session.query(MatchResult).filter(MatchResult.match_id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    def delete(self, id: str):
        self.session.query(MatchResult).filter(MatchResult.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
