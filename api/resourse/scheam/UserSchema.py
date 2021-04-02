from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class UserSchema(BaseSchema):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()
    b_day = fields.Int()
    number = fields.Int()
    player_id = fields.Int()
    role = fields.Str()


user_schema = UserSchema()
users_schema = UserSchema(many=True)
