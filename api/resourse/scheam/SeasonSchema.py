from marshmallow import Schema, fields


class SeasonSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()


season_schema = SeasonSchema()
seasons_schema = SeasonSchema(many=True)
