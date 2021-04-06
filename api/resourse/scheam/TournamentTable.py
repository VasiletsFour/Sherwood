from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class TournamentTableSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()
    points = fields.Int()
    win = fields.Int()
    draw = fields.Int()
    lose = fields.Int()
    goalFor = fields.Int()
    goalAgainst = fields.Int()
    difference = fields.Int()


tournament_table_schema = TournamentTableSchema()
tournament_tables_schema = TournamentTableSchema(many=True)
