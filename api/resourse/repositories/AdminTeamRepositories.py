from utils.responce.responce import Response
from db.connect.connect import db
from db.models.TeamsModel import Teams
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema


class AdminTeamRepositories(Repositories):
    @staticmethod
    def get():
        try:
            teams = db.session.query(Teams.id, Teams.name).filter(Teams.league_id == None).all()
            schema = teams_schema.dump(teams)

            return Response(status=200, message={'data': schema}).__dict__
        except AttributeError:
            return Response(status=400, message={'error': "Team get error"}).__dict__

    @staticmethod
    def post(body: dict):
        team = Teams(**body)

        db.session.add(team)
        db.session.commit()

        return Response(status=201, message={'data': 'create'}).__dict__

    @staticmethod
    def put(body: object):
        db.session.query(Teams).filter(Teams.id.in_(body["teams"])).update(dict(league_id=body["league_id"]),
                                                                           synchronize_session=False)
        db.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    @staticmethod
    def putUpdateName(id: str, body: dict):
        db.session.query(Teams).filter(Teams.id == id).update(dict(**body))
        db.session.commit()

        return Response(status=201, message={'data': 'update'}).__dict__

    @staticmethod
    def deleteFromLeague(id: str):
        db.session.query(Teams).filter(Teams.id == id).update({'league_id': None})
        db.session.commit()

        return Response(status=200, message={'data': 'Delete team'}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Teams).filter(Teams.id == id).delete()
        db.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
