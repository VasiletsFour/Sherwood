from functools import wraps

from flask import request, abort

from db.connect.connect import db
from db.models.UserModel import Users
from utils.logger.logger import Logger
from utils.token.token import Token


def admin_login(f):
    return login(f, role="admin")


def user_login(f):
    return login(f)


def login(f, role=None):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = Token()
        logger = Logger()
        auth = request.headers.get("Authorization")
        ref = request.headers.get("RefreshToken")

        if auth and ref:
            authDecode = token.decodeToken(auth)

            if authDecode:
                user = db.session.query(Users).filter(Users.id == authDecode["id"],
                                                      Users.confirmEmail == True,
                                                      Users.role == role if role else Users.role != None,
                                                      Users.ban == False).first()

                if user:
                    return f(*args, **kwargs)

                logger.logger(403, message="Middleware auth token, user not found")

                return abort(403)

            refDecode = token.decodeToken(ref)

            if refDecode:
                newToken = token.getToken(refDecode["id"], refDecode["role"])

                return {"newToken": newToken}, 201

        logger.logger(403, message="Middleware ref token, expired")

        return abort(403)

    return decorated_function
