from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()


class BcryptPass:
    @staticmethod
    def passHash(password):

        return bcrypt.generate_password_hash(password)

    @staticmethod
    def checkPass(password:str, hash_pass):

        return bcrypt.check_password_hash(hash_pass, password)
