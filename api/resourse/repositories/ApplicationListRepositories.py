import requests

from config import Config
from resourse.repositories.Repositories import Repositories
from utils.responce.responce import Response


class ApplicationListRepositories(Repositories):
    @staticmethod
    def get():
        url = Config.GOOGLE_URL_FOR_DOC
        req = requests.get(
            "https://hudoc.echr.coe.int/app/conversion/docx/?library=ECHR&id=001-176931&filename=CASE%20OF%20NDIDI%20v.%20THE%20UNITED%20KINGDOM.docx&logEvent=False",
            stream=True)
        return Response(status=200, message={'data': req.content}).__dict__
