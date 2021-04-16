from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class TournamentTableSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()
    points = fields.Int()
    win = fields.Int()
    draw = fields.Int()
    lose = fields.Int()
    goalFor = fields.Int()
    goalAgainst = fields.Int()
    difference = fields.Int()


tournament_table_serialization = TournamentTableSerialization()
tournament_tables_serialization = TournamentTableSerialization(many=True)
