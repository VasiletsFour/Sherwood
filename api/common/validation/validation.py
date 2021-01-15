from cerberus import Validator


class Validation:
    @staticmethod
    def validation(schema, body):
        valid = Validator(schema)

        return valid.validate(body)
