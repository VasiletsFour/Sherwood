from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class TimeTableNestedSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


class TimeTableSchema(BaseSchema):
    id = fields.Int()
    host = fields.Nested(TimeTableNestedSchema())
    guest = fields.Nested(TimeTableNestedSchema())
    tour = fields.Int()
    place = fields.Nested(TimeTableNestedSchema())
    status = fields.Str()
    date = fields.Int()


time_table_schema = TimeTableSchema()
time_tables_schema = TimeTableSchema(many=True)
