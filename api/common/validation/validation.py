from cerberus import Validator


class Validation:
    @staticmethod
    def validation(schema, body):
        v = Validator()
        v.schema = schema
        valid = v.validate(body)
        print(v.errors)
        return valid
