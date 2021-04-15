class ErrorHandler(Exception):
    def __init__(self, message):
        self.message = message

        super().__init__(self.message)


class NotConnectError(Exception):
    def __init__(self, text):
        self.txt = text


class UserNotFound(ErrorHandler):
    def __init__(self):
        super(UserNotFound, self).__init__(message="User not found")


class InvalidPassword(ErrorHandler):
    def __init__(self):
        super(InvalidPassword, self).__init__(message="Invalid password")


class EmailNotConfirm(ErrorHandler):
    def __init__(self):
        super(EmailNotConfirm, self).__init__(message="Please, confirm your email")


class BanAccount(ErrorHandler):
    def __init__(self):
        super(BanAccount, self).__init__(message="Your account has been blocked")


class ValidateError(ErrorHandler):
    def __init__(self, route: str, body: dict):
        self.rote = route
        self.body = body

        super(ValidateError, self).__init__(message="Validate error in %, body:%s".format(self, route, self, body))
