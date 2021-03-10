from marshmallow import Schema, fields
from resourse.scheam.SeasonSchema import SeasonSchema


class LeagueSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    leagues = fields.Nested(SeasonSchema(many=True))


league_schema = LeagueSchema()
leagues_schema = LeagueSchema(many=True)
