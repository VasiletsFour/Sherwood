import requests

from config import Config
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class ApplicationListRepositories(Repositories):
    @staticmethod
    def get():
        url = "https://docs.google.com/spreadsheets/d/1Ar1GTUuoYbYa8yZd51YzJTIsnC7dluHsJITAv9T5gZk/edit#gid=0" or Config.GOOGLE_URL_FOR_DOC
        req = requests.get(url, stream=True)

        return Response(status=200, message={'data': req.content})
