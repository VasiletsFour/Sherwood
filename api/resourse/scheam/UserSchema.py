from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()


user_schema = UserSchema()
users_schema = UserSchema(many=True)
