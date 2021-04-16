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


class JWTException(ErrorHandler):
    def __init__(self):
        super(JWTException, self).__init__(message="Fake token")
