from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class TeamSerialization(BaseSerialization):
    id = fields.Int()
    name = fields.Str()
    league_id = fields.Int()
    league_name = fields.Str()


team_serialization = TeamSerialization()
teams_serialization = TeamSerialization(many=True)
