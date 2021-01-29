from marshmallow import Schema, fields


class BlogSchema(Schema):
    id = fields.Int()
    title = fields.String()
    tags = fields.List(fields.String)
    text = fields.String()
    date = fields.Int()
    # img = fields.String()
    author_id = fields.Int()


blog_schema = BlogSchema()
blogs_schema = BlogSchema(many=True)
