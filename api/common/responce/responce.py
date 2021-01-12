class Responce(object):
    def __init__(self, status, message):
        self.status = status
        self.message = message

    def __dict__(self):
        return dict([('status', self.status), ('message', self.message)])