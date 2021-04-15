from utils.logger.logger import Logger

logger = Logger()


class Response(object):
    def __init__(self, status, message, logger_message=None):
        self.status = status
        self.message = message

        self.logger = logger.logger(status, logger_message or message)
