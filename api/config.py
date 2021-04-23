from os import environ

from dotenv import load_dotenv

load_dotenv()


class Config(object):
    CLIENT = environ.get("CLIENT")

    # flask config
    DEBUG = environ.get("DEBUG")
    DEVELOPMENT = environ.get("DEVELOPMENT")

    # database
    SQLALCHEMY_TRACK_MODIFICATIONS = environ.get("SQLALCHEMY_TRACK_MODIFICATIONS")
    MYSQL_USER = environ.get("MYSQL_USER")
    MYSQL_PASSWORD = environ.get("MYSQL_PASSWORD")
    MYSQL_port = environ.get("MYSQL_port")
    MYSQL_DATABASE = environ.get("MYSQL_DATABASE")
    SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")

    # bcrypt-key
    JWT_SECRET_KEY = environ.get("JWT_SECRET_KEY")
    bcrypt_key = environ.get("bcrypt_key")

    # CORS
    CORS_ENABLED = environ.get("CORS_ENABLED")

    # smtp
    PORT_SMTP = environ.get("PORT_SMTP")
    EMAIL_SMTP = environ.get("EMAIL_SMTP")
    PASS_SMTP = environ.get("PASS_SMTP")

    # google drive
    GOOGLE_CLIENT_ID = environ.get("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET = environ.get("GOOGLE_CLIENT_SECRET")
    GOOGLE_API_NAME = environ.get("GOOGLE_API_NAME")
    GOOGLE_API_VERSION = environ.get("GOOGLE_API_VERSION")
    SCOPES = environ.get("SCOPES")
    GOOGLE_URL_FOR_DOC = environ.get("GOOGLE_URL_FOR_DOC")


class ProductionConfig(Config):
    CLIENT = "//"
    DEVELOPMENT = False
    DEBUG = False
