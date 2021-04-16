from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class RefereeSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()


referee_serialization = RefereeSerialization()
referees_serialization = RefereeSerialization(many=True)
