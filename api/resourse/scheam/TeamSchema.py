from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class TeamSchema(BaseSchema):
    id = fields.Int()
    name = fields.Str()
    league_id = fields.Int()
    league_name = fields.Str()


team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)
