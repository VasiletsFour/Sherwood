from flask_sqlalchemy import SQLAlchemy
from common.errorExcept.erroExcept import NotConnectError

db = SQLAlchemy()


def connectDd(app):
    try:
        db.init_app(app)
        print(" -Database connect")

        return db
    except:
        raise NotConnectError("Connect database Error")
