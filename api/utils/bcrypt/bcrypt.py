from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()


class BcryptPass:
    def __init__(self):
        self.checkPass = lambda password, hash_pass: bcrypt.check_password_hash(hash_pass, password)
        self.passHash = lambda password: bcrypt.generate_password_hash(password)
