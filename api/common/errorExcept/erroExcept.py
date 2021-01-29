class NotConnectError(Exception):
    def __init__(self, text):
        self.txt = text


class UserNotFound(Exception):
    def __init__(self):
        self.text = "User not found"


class InvalidPassword(Exception):
    def __init__(self):
        self.text = "Invalid password"
