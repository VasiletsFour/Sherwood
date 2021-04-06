from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class TimeTableNestedSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


class MatchSchema(BaseSchema):
    id = fields.Int()
    goal_host = fields.Int()
    goal_guest = fields.Int()
    status_host = fields.Str()
    status_guest = fields.Str()


class ResultSchema(BaseSchema):
    id = fields.Int()
    host = fields.Nested(TimeTableNestedSchema())
    matchResult = fields.Nested(MatchSchema())
    guest = fields.Nested(TimeTableNestedSchema())
    tour = fields.Int()
    place = fields.Nested(TimeTableNestedSchema())
    date = fields.Int()


result_schema = ResultSchema()
results_schema = ResultSchema(many=True)
