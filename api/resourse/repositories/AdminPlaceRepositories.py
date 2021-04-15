from sqlalchemy.exc import IntegrityError

from db.models.PlaceModel import Places
from resourse.repositories.Repositories import Repositories
from resourse.scheam.PlaceSchema import places_schema
from utils.responce.responce import Response


class AdminPlaceRepositories(Repositories):
    def get(self):
        places = self.session.query(Places).all()
        schema = places_schema.dump(places)

        return Response(status=200, message={'data': schema})

    def post(self, body: dict):
        try:
            place = Places(**body)

            self.session.add(place)
            self.session.commit()

            return Response(status=201, message={'data': "create"})
        except AssertionError:
            return Response(status=400, message={"error": 'Create Error, this season have leagues'})
        except IntegrityError:
            return Response(status=400, message={"error": 'Create Error, wrong id'})

    def put(self, id: str, body: dict):
        self.session.query(Places).filter(Places.id == id).update(dict(name=body["name"]))
        self.session.commit()

        return Response(status=201, message={'data': "update"})

    def delete(self, id: str):
        self.session.query(Places).filter(Places.id == id).delete()
        self.session.commit()

        return Response(status=201, message={"data": "Delete"})
