from marshmallow import Schema, fields


class LeagueSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    season_id = fields.Int()
    season_name = fields.Str()


league_schema = LeagueSchema()
leagues_schema = LeagueSchema(many=True)
