from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.Integer()
    firstname = fields.Str()
    surname = fields.Str()


user_schema = UserSchema()
users_schema = UserSchema(many=True)
