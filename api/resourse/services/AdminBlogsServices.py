import werkzeug

from resourse.repositories.AdminBlogRepositories import AdminBlogRepositories
from resourse.services.Services import Services
from resourse.validator.BlogImgValidate import ALLOWED_EXTENSIONS
from resourse.validator.BlogValidate import create, update
from utils.responce.responce import Response


class AdminBlogServices(Services):
    def __init__(self):
        super().__init__()
        self.repository = AdminBlogRepositories()

    def get(self, file: werkzeug.datastructures.FileStorage, token: str):
        fileType = file.filename.split(".", 1)[1].lower()
        validate = fileType in ALLOWED_EXTENSIONS

        if validate and token:
            return self.repository.get(file, token)

        return Response(status=400, message={'error': 'Empty file'},
                        logger_message="Blog wrong file format or empty file")

    def post(self, body: dict, token: str):
        res = self.valid.validation(create, body)
        check = self.decode(token)

        if res and check:
            return self.repository.post(body, check)

        return Response(status=400, message={'error': 'Invalid create article'},
                        logger_message="Blog invalid body:{body}".format(body=body))

    def put(self, id: str, body: dict):
        res = self.valid.validation(update, body)

        if res and id:
            return self.repository.put(id, body)

        return Response(status=400, message={'error': 'Invalid update article'},
                        logger_message="Invalid update article body:{body}".format(body=body))

    def delete(self, id: str):
        if id:
            return self.repository.delete(id)

        return Response(status=400, message={'error': 'Failed delete article'})
