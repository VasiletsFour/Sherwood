from flask_sqlalchemy import SQLAlchemy

from utils.errorExcept.erroExcept import NotConnectError

db = SQLAlchemy()


def connectDd(app, msg=print(" -Database connect")):
    try:
        db.init_app(app)
        msg

        return db
    except:
        raise NotConnectError("Connect database Error")
