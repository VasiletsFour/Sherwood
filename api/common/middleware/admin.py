from flask import g, request, redirect, url_for, abort
from functools import wraps


def login_admin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth = request.headers.get("Authorization")

        if auth:
            return f(*args, **kwargs)

        return abort(403)

    return decorated_function
