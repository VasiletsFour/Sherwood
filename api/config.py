from os import environ, path

class Config(object):
    DEBUG = True
    DEVELOPMENT = True
    MYSQL_USER = environ.get("root")
    MYSQL_PASSWORD = environ.get("Hft4150tbc4101f")
    MYSQL_port = 3306
    MYSQL_HOST = environ.get("DESKTOP-QVU8UJA")
    MYSQL_DATABASE = environ.get("Elit")


class ProductionConfig(Config):
    DEVELOPMENT = False
    DEBUG = False
