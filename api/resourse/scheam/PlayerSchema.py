from marshmallow import Schema, fields


class PlayerSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    team_id = fields.Int()
    team_name = fields.Str()


player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)
