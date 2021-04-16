from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class UserSerialization(BaseSerialization):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()
    b_day = fields.Int()
    number = fields.Int()
    player_id = fields.Int()
    role = fields.Str()


user_serialization = UserSerialization()
users_serialization = UserSerialization(many=True)
