from db.models.UserModel import Users
from resourse.repositories.Repositories import Repositories
from resourse.scheam.UserSchema import user_schema
from utils.responce.responce import Response


class AccountRepositories(Repositories):
    def get(self, id: str):
        user = self.session.query(Users).filter(Users.id == id).first()

        if not user:
            return Response(status=404, message={"error": "User not found"}).__dict__

        schema = user_schema.dump(user)

        # Temporary picture, delete
        schema["avatar"] = "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"

        return Response(200, {'data': schema}).__dict__
