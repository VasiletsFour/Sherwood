from marshmallow import Schema, fields


class BlogSchema(Schema):
    id = fields.Integer()
    title = fields.String()
    tags = fields.List()
    text = fields.String()
    date = fields.Integer()
    author_id = fields.Integer()


blog_schema = BlogSchema()
blogs_schema = BlogSchema(many=True)
