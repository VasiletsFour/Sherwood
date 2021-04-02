from marshmallow import fields

from resourse.scheam.Schema import BaseSchema


class BlogSchema(BaseSchema):
    id = fields.Int()
    title = fields.Str()
    tags = fields.List(fields.Str())
    text = fields.Str()
    date = fields.Int()
    # img = fields.String()
    author_id = fields.Int()


blog_schema = BlogSchema()
blogs_schema = BlogSchema(many=True)
