from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class PlaceSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


place_schema = PlaceSchema()
places_schema = PlaceSchema(many=True)
