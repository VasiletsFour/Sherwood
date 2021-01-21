from os import environ


class Config(object):
    CLIENT = "http://localhost:3000"

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
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # key
    JWT_SECRET_KEY = "flask_jwt_secret"
    bcrypt_key = "flask_bcrypt-secret"

    # CORS
    CORS_ENABLED = False

    #smtp
    PORT_SMTP = 465
    EMAIL_SMTP = "vasiletsl0unge@gmail.com"
    PASS_SMTP = "hft4150tbc4101f"

class ProductionConfig(Config):
    CLIENT = "//"
    DEVELOPMENT = False
    DEBUG = False
