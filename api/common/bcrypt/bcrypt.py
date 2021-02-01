from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()


class BcryptPass:
    @staticmethod
    def passHash(password):
        password = bcrypt.generate_password_hash(password)
        return password.decode()

    @staticmethod
    def checkPass(password: str, hash_pass: str):
        return bcrypt.check_password_hash(hash_pass, password)
