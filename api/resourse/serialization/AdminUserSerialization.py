from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class AdminUserSerialization(BaseSerialization):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()
    b_day = fields.Int()
    number = fields.Int()
    role = fields.Str()
    ban = fields.Bool()


admin_user_serialization = AdminUserSerialization()
admin_users_serialization = AdminUserSerialization(many=True)
