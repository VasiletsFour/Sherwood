from flask_sqlalchemy import SQLAlchemy

from utils.errorExcept.erroExcept import NotConnectError

db = SQLAlchemy()


def connectDd(app, msg=" -Database connect"):
    try:
        db.init_app(app)
        print(msg)

        return db
    except:
        raise NotConnectError("Connect database Error")
