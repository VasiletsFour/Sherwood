from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema
from utils.responce.responce import Response


class AdminTeamRepositories(Repositories):
    def get(self):
        try:
            teams = self.session.query(Teams.id, Teams.name).filter(Teams.league_id == None).all()
            schema = teams_schema.dump(teams)

            return Response(status=200, message={'data': schema})
        except AttributeError:
            return Response(status=400, message={'error': "Team get error"})

    def post(self, body: dict):
        team = Teams(**body)

        self.session.add(team)
        self.session.commit()

        return Response(status=201, message={'data': 'create'})

    def put(self, body: object):
        self.session.query(Teams).filter(Teams.id.in_(body["teams"])).update(dict(league_id=body["league_id"]),
                                                                             synchronize_session=False)
        self.session.commit()

        return Response(status=201, message={'data': 'update'})

    def putUpdateName(self, id: str, body: dict):
        self.session.query(Teams).filter(Teams.id == id).update(dict(**body))
        self.session.commit()

        return Response(status=201, message={'data': 'update'})

    def deleteFromLeague(self, id: str):
        self.session.query(Teams).filter(Teams.id == id).update({'league_id': None})
        self.session.commit()

        return Response(status=200, message={'data': 'Delete team'})

    def delete(self, id: str):
        self.session.query(Teams).filter(Teams.id == id).delete()
        self.session.commit()

        return Response(status=200, message={'data': 'Delete'})
