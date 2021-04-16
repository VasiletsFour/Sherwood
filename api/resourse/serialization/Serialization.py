from marshmallow import Schema, post_dump


class BaseSerialization(Schema):
    SKIP_VALUES = {None}

    @post_dump
    def remove_skip_values(self, data, **kwargs):
        return {
            key: value for key, value in data.items()
            if type(value) == list or type(value) == dict or value not in self.SKIP_VALUES
        }
