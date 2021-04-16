from marshmallow import Serialization, fields

from resourse.serialization.Serialization import BaseSerialization


class PlayerSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()
    team_id = fields.Int()
    team_name = fields.Str()


class PlayerTeamSerialization(Serialization):
    id = fields.Int()
    name = fields.Str()
    players = fields.Nested(PlayerSerialization(many=True))


player_serialization = PlayerSerialization()
players_serialization = PlayerSerialization(many=True)
player_team_serialization = PlayerTeamSerialization()
players_team_serialization = PlayerTeamSerialization(many=True)
