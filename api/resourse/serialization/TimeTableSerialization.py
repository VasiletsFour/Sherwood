from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class TimeTableNestedSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()


class TimeTableSerialization(BaseSerialization):
    id = fields.Int()
    host = fields.Nested(TimeTableNestedSerialization())
    guest = fields.Nested(TimeTableNestedSerialization())
    tour = fields.Int()
    place = fields.Nested(TimeTableNestedSerialization())
    status = fields.Str()
    date = fields.Int()


time_table_serialization = TimeTableSerialization()
time_tables_serialization = TimeTableSerialization(many=True)
