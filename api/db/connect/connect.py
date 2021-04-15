from flask_sqlalchemy import SQLAlchemy

from utils.errorExcept.erroExcept import NotConnectError

db = SQLAlchemy()


class DBConnect:
    @staticmethod
    def connectDd(app, msg=" -Database connect"):
        try:
            db.init_app(app)
            print(msg)

            return db
        except:
            raise NotConnectError("Connect database Error")

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DBConnect, cls).__new__(cls)
        return cls.instance
