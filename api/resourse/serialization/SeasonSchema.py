from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class SeasonSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()
    date = fields.Int()
    activate = fields.Bool()


season_serialization = SeasonSerialization()
seasons_serialization = SeasonSerialization(many=True)
