from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class TimeTableNestedSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()


class MatchSchema(BaseSchema):
    id = fields.Int()
    goal_for = fields.Int()
    status = fields.Str()


class ResultSchema(BaseSchema):
    id = fields.Int()
    host = fields.Nested(TimeTableNestedSchema())
    matchHomeTeams = fields.Nested(MatchSchema())
    matchAwayTeams = fields.Nested(MatchSchema())
    guest = fields.Nested(TimeTableNestedSchema())
    tour = fields.Int()
    place = fields.Nested(TimeTableNestedSchema())
    status = fields.Str()
    date = fields.Int()


result_schema = ResultSchema()
results_schema = ResultSchema(many=True)
