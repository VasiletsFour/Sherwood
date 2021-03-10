class NotConnectError(Exception):
    def __init__(self, text):
        self.txt = text


class UserNotFound(Exception):
    text = "User not found"


class InvalidPassword(Exception):
    text = "Invalid password"


class EmailNotConfirm(Exception):
    text = "Please, confirm your email"


class BanAccount(Exception):
    text = "Your account has been blocked"
