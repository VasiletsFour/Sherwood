from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class RefereeSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


referee_schema = RefereeSchema()
referees_schema = RefereeSchema(many=True)
