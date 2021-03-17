create = {
    'firstname': {
        'type': 'string',
        'required': True
    },
    "surname": {
        'type': 'string',
        'required': True
    },
    "email": {
        'type': 'string',
        'required': True,
        "regex": "^[\w.+\-]+@gmail\.com$",
    },
    "password": {
        'type': 'string',
        'required': True
    }
}

updateAdmin = {
    'ban': {
        'type': 'boolean'
    },
    "role": {
        'type': 'string',
        'allowed': ['admin', 'user']
    }
}

login = {
    "email": {
        'type': 'string',
        'required': True
    },
    "password": {
        'type': 'string',
        'required': True
    }
}
