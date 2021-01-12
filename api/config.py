from os import environ, path


class Config(object):
    # flask config
    DEBUG = True
    DEVELOPMENT = True

    # database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MYSQL_USER = environ.get("root")
    MYSQL_PASSWORD = environ.get("Hft4150tbc4101f")
    MYSQL_port = 3306
    MYSQL_DATABASE = environ.get("Elit")
    SQLALCHEMY_DATABASE_URI = "mysql://root:Hft4150tbc4101f@localhost/Elit"


class ProductionConfig(Config):
    DEVELOPMENT = False
    DEBUG = False
