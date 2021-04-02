from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class AdminUserSchema(BaseSchema):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()
    role = fields.Str()
    ban = fields.Bool()


admin_user_schema = AdminUserSchema()
admin_users_schema = AdminUserSchema(many=True)
