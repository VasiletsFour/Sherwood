from functools import wraps

from flask import request, abort

from common.token.token import Token
from db.connect.connect import db
from db.models.UserModel import Users


def login_admin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            token = Token()
            auth = request.headers.get("Authorization")
            ref = request.headers.get("RefreshToken")

            if auth and ref:
                authDecode = token.decodeToken(auth)

                if authDecode:
                    user = db.session.query(Users).filter(Users.id == authDecode["id"],
                                                          Users.confirmEmail == True, Users.role == "admin").first()
                    if user:
                        return f(*args, **kwargs)

                    return abort(403)

                refDecode = token.decodeToken(ref)

                if refDecode:
                    newToken = token.getToken(refDecode["id"], refDecode["role"])

                    return {"newToken": newToken}, 201

            return abort(403)
        except:
            return abort(403)

    return decorated_function
