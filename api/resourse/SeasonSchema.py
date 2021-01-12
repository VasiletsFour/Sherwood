from marshmallow import Schema, fields


class SeasonSchema(Schema):
    id = fields.Integer()
    name = fields.Str()
    date = fields.Integer()


season_schema = SeasonSchema()
seasons_schema = SeasonSchema(many=True)