from marshmallow import Schema, fields


class TeamSchema(Schema):
    id = fields.Int()
    name = fields.Str()
    league_id = fields.Int()
    league_name = fields.Str()


team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)
