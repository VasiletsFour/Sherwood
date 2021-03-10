from marshmallow import Schema, fields


class AdminUserSchema(Schema):
    id = fields.Int()
    firstname = fields.Str()
    surname = fields.Str()
    email = fields.Str()
    role = fields.Str()
    ban = fields.Bool()


admin_user_schema = AdminUserSchema()
admin_users_schema = AdminUserSchema(many=True)
