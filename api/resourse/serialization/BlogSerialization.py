from marshmallow import fields

from resourse.serialization.Serialization import BaseSerialization


class BlogSerialization(BaseSerialization):
    id = fields.Int()
    title = fields.Str()
    tags = fields.List(fields.Str())
    text = fields.Str()
    date = fields.Int()
    # img = fields.String()
    author = fields.Str()


blog_serialization = BlogSerialization()
blogs_serialization = BlogSerialization(many=True)
