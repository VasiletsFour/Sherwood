from marshmallow import Schema, fields


class LeagueSchema(Schema):
    id = fields.Int()
    name = fields.Str()


class LeagueSeasonSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    leagues = fields.Nested(LeagueSchema(many=True))


league_schema = LeagueSeasonSchema()
leagues_schema = LeagueSeasonSchema(many=True)
