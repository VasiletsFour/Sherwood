from flask import current_app


class Logger:
    def __init__(self):
        self.logger = lambda status, message: current_app.logger.error(message) if status >= 400 else None

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Logger, cls).__new__(cls)

        return cls.instance
