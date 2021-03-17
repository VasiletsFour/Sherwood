from datetime import datetime

import jwt

from common.responce.responce import Response
from config import Config


class Token:
    def __init__(self):
        self.__expiredTime = lambda second: datetime.now().timestamp() + second
        self.__key = Config.JWT_SECRET_KEY
        self.__algorithms = "HS256"

    def decodeToken(self, token: str):
        try:
            return jwt.decode(token.replace("Bearer ", ""), self.__key, algorithm=[self.__algorithms])
        except Exception as err:
            print(err)
            return None

    def getConfirmToken(self, email: str):
        if not id:
            raise Exception()

        confirm = jwt.encode({"exp": self.__expiredTime(600), "user": email}, self.__key,
                             algorithm=self.__algorithms)

        return confirm.decode("utf-8")

    def getToken(self, id, role: str):
        try:
            body = {"role": role, "id": id}
            refExpiredTime = 9900 if role == 'user' else 3600

            if role == 'user' or role == "admin" and id:
                auth = jwt.encode({"exp": self.__expiredTime(600), **body}, self.__key,
                                  algorithm=self.__algorithms)
                ref = jwt.encode({"exp": self.__expiredTime(refExpiredTime), **body}, self.__key,
                                 algorithm=self.__algorithms)
                tokens = {'auth': auth.decode("utf-8"), 'ref': ref.decode("utf-8")}

                return tokens

            raise Exception()
        except:
            return Response(status=400, message={'error': 'Token Error'}).__dict__
