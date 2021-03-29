from flask import current_app


class Logger:
    @staticmethod
    def logger(status: int, message: str):
        if status >= 400:
            return current_app.logger.error(message)
