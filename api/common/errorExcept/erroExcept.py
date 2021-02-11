class NotConnectError(Exception):
    def __init__(self, text):
        self.txt = text


class UserNotFound(Exception):
    text = "User not found"


class InvalidPassword(Exception):
    text = "Invalid password"
