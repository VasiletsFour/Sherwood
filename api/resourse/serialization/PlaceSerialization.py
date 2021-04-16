from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class PlaceSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()


place_serialization = PlaceSerialization()
places_serialization = PlaceSerialization(many=True)
