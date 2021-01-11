from common.marshmallow.marshmallow import ma

class SeasonSchema(ma.Schema):
    class Meta:
        fields = ("name",  "_links")

    _links = ma.Hyperlinks(
        {
            "self": ma.URLFor('season', values=dict(id="<id>")),
            "collection": ma.URLFor("get"),
        }
    )


season_schema = SeasonSchema()
seasons_schema = SeasonSchema(many=True)