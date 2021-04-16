from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class LeagueSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()


class LeagueSeasonSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    leagues = fields.Nested(LeagueSerialization(many=True))


league_serialization = LeagueSeasonSerialization()
leagues_serialization = LeagueSeasonSerialization(many=True)
