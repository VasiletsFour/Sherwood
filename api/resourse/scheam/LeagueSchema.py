from marshmallow import Schema, fields


class LeagueSchema(Schema):
    id = fields.Integer()
    name = fields.Str()


league_schema = LeagueSchema()
leagues_schema = LeagueSchema(many=True)
