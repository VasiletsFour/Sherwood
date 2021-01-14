from flask_sqlalchemy import SQLAlchemy

from common.errorExcept.erroExcept import NotConnectError

db = SQLAlchemy()


def connectDd(app, connectMes=print(" -Database connect")):
    try:
        db.init_app(app)
        connectMes()

        return db
    except:
        raise NotConnectError("Connect database Error")
