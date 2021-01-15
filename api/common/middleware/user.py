from functools import wraps

from flask import request, abort


def login_user(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            auth = request.headers.get("Authorization")
            ref = request.headers.get("Refresh")

            if auth and ref:
                return f(*args, **kwargs)

            return abort(403)
        except:
            return abort(400)

    return decorated_function
