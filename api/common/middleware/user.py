from functools import wraps

from flask import request, abort

from common.token.token import Token


def login_user(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            token = Token()
            auth = request.headers.get("Authorization")
            ref = request.headers.get("RefreshToken")

            if auth and ref:
                authDecode = token.decodeToken(auth)

                if authDecode:
                    return f(*args, **kwargs)

                refDecode = token.decodeToken(ref)

                if refDecode:
                    newToken = token.getToken(refDecode["id"], refDecode["role"])

                    return {"newToken": newToken}, 201

            return abort(403)
        except:
            return abort(403)

    return decorated_function
