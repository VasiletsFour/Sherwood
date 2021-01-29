from datetime import datetime

import jwt

from common.responce.responce import Responce
from config import Config


class Token:
    def __init__(self):
        self.__expiredTime = lambda second: datetime.now().timestamp() + second
        self.__key = Config.JWT_SECRET_KEY
        self.__algorithms = "HS256"

        self.decode = lambda token: jwt.decode(token, self.__key)

    def getConfirmToken(self, email: str):
        if not id:
            raise Exception()

        confirm = jwt.encode({"exp": self.__expiredTime(600), "user": email}, self.__key,
                             algorithm=self.__algorithms)

        return confirm.decode("utf-8")


    def getToken(self, id, role: str):
        try:
            if role == 'user' or role == "admin" and id:
                auth = jwt.encode({"exp": self.__expiredTime(600), id: id, role: role}, self.__key,
                                  algorithm=self.__algorithms)
                ref = jwt.encode({"exp": self.__expiredTime(3600), id: id}, self.__key, algorithm=self.__algorithms)
                tokens = {'auth': auth.decode("utf-8"), 'ref': ref.decode("utf-8")}

                return tokens

            raise Exception()
        except:
            return Responce(400, {'error': 'Token Error'}).__dict__
