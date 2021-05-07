from utils.token.token import Token
from utils.validation.validation import Validation


class Services:
    def __init__(self):
        token = Token()

        self.valid = Validation
        self.decode = lambda decode_token: token.decodeToken(decode_token)
