from marshmallow import Schema, fields


class PlayerSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    team_id = fields.Int()
    team_name = fields.Str()


class PlayerTeamSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    players = fields.Nested(PlayerSchema(many=True))


player_schema = PlayerSchema()
players_schema = PlayerSchema(many=True)
player_team_schema = PlayerTeamSchema()
players_team_schema = PlayerTeamSchema(many=True)
