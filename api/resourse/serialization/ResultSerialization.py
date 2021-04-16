from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class TimeTableNestedSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()


class MatchSerialization(BaseSerialization):
    id = fields.Int()
    goal_host = fields.Int()
    goal_guest = fields.Int()
    status_host = fields.Str()
    status_guest = fields.Str()


class ResultSerialization(BaseSerialization):
    id = fields.Int()
    host = fields.Nested(TimeTableNestedSerialization())
    matchResult = fields.Nested(MatchSerialization())
    guest = fields.Nested(TimeTableNestedSerialization())
    tour = fields.Int()
    place = fields.Nested(TimeTableNestedSerialization())
    date = fields.Int()


result_serialization = ResultSerialization()
results_serialization = ResultSerialization(many=True)
