from marshmallow import Schema, fields


class RefereeSchema(Schema):
    id = fields.Int()
    name = fields.Str()


referee_schema = RefereeSchema()
referees_schema = RefereeSchema(many=True)
