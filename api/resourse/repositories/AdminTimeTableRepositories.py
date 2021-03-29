from db.connect.connect import db
from db.models.TeamsModel import Teams
from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.TeamSchema import teams_schema
from utils.responce.responce import Response
from utils.token.token import Token


class AdminTimeTableRepositories(Repositories):
    def __init__(self):
        self.token = Token()

    def get(self, league_id: str):
        # authToken = self.token.decodeToken(auth)
        # users = db.session.query(Users).filter(Users.confirmEmail == True, Users.id != authToken["id"]).all()
        # schema = admin_users_schema.dump(users)

        return Response(status=200, message={'data': "W"}).__dict__

    @staticmethod
    def post(body: dict):
        teams = db.session.query(Teams).filter(Teams.league_id == body["league_id"]).order_by(Teams.id.desc())
        schema = teams_schema.dump(teams)

        result = []
        teamsTest = [
            "Team 1",
            "Team 2",
            "Team 3",
            "Team 4",
            "Team 5",
            "Team 6",
            "Team 7"
        ]

        isHost = True

        if len(schema) % 2 == 0: teamsTest.append(False)

        for i in range(len(schema) - 1):
            teamsCount = len(schema)

            if i > 0:
                lastChild = teamsTest[teamsCount - 1]

                isHost = not isHost

                teamsTest.remove(lastChild)
                teamsTest.insert(1, lastChild)

            for k in range(len(schema) // 2):
                if teamsTest[k] == False or teamsTest[teamsCount - k - 1] == False: continue

                host = teamsTest[k] if isHost else teamsTest[teamsCount - k - 1]
                guest = teamsTest[teamsCount - k - 1] if isHost else teamsTest[k]

                timeTable = {"tour": i + 1, "host": host, "guest": guest}

                result.append(timeTable)

        return Response(status=201, message={'data': result}).__dict__

    @staticmethod
    def delete(id: str):
        db.session.query(Users).filter(Users.id == id).delete()
        db.session.commit()

        return Response(status=200, message={'data': 'Delete'}).__dict__
