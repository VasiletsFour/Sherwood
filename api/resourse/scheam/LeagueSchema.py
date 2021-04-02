from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class LeagueSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


class LeagueSeasonSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    leagues = fields.Nested(LeagueSchema(many=True))


league_schema = LeagueSeasonSchema()
leagues_schema = LeagueSeasonSchema(many=True)
