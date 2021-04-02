from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class SeasonSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    activate = fields.Bool()


season_schema = SeasonSchema()
seasons_schema = SeasonSchema(many=True)
