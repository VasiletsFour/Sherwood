from utils.token.token import Token
from utils.validation.validation import Validation


class Services:
    def __init__(self):
        self.valid = Validation
        self.decode = lambda decode_token: Token().decodeToken(decode_token)

    def get(self, *args, **kwargs):
        pass

    def post(self, *args, **kwargs):
        pass

    def put(self, *args, **kwargs):
        pass

    def delete(self, *args, **kwargs):
        pass
