import werkzeug

from common.responce.responce import Responce
from resourse.repositories.AdminBlogRepositories import AdminBlogRepositories
from resourse.services.Services import Services
from resourse.validator.BlogImgValidate import ALLOWED_EXTENSIONS
from resourse.validator.BlogValidate import create, update


class AdminBlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminBlogRepositories()

    def get(self, file: werkzeug.datastructures.FileStorage, token: str):
        fileType = file.filename.split(".", 1)[1].lower()
        validate = fileType in ALLOWED_EXTENSIONS

        if validate and token:
            return self.repository.get(file, token)

        return Responce(400, {'error': 'Empty file'}).__dict__

    def post(self, body: dict, token: str):
        res = self.valid.validation(create, body)

        if res and token:
            return self.repository.post(body, token)

        return Responce(400, {'error': 'Not valid'}).__dict__

    def put(self, id: str, body: dict):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Responce(400, {'error': 'Not valid'}).__dict__

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Responce(400, {'error': 'Not valid'}).__dict__
