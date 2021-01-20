import jwt

from config import Config


def checkToken(token: str):
    decodeToken = jwt.decode(token, Config.JWT_SECRET_KEY)

    return decodeToken


def getConfirmToken(id):
    if id:
        confirm = jwt.encode({"user": id}, Config.JWT_SECRET_KEY)

        return confirm.decode('utf-8')

    return False


def getToken(id, role: str):
    if role == 'user' or role == "admin" and id:
        auth = jwt.encode({id: id, role: role}, Config.JWT_SECRET_KEY)
        ref = jwt.encode({id: id}, Config.JWT_SECRET_KEY)
        tokens = {'auth': auth.decode("utf-8"), 'ref': ref.decode("utf-8")}

        return tokens

    return False
