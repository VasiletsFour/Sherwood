from marshmallow import Schema, fields


class PlayerSchema(Schema):
    id = fields.Integer()
    name = fields.Str()
    team_id = fields.Integer()


player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)
