from marshmallow import Schema, fields


class TeamSchema(Schema):
    id = fields.Integer()
    name = fields.Str()
    league_id = fields.Integer()
    league_name = fields.Str()


team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)
