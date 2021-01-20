update = {
    'title': {
        'type': 'string'
    },
    "tags": {
        'type': 'list'
    },
    'text': {
        'type': 'string'
    }
}

create = {
    'title': {
        'type': 'string',
        'required': True
    },
    "tags": {
        'type': 'list'
    },
    'text': {
        'type': 'string',
        'required': True
    }
}
