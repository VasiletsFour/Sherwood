create = {
    'league_id': {
        'type': 'integer',
        'required': True
    }
}

update = {
    'date': {
        'type': 'integer'
    },
    'place_id': {
        'type': 'integer'
    },
    'status': {
        'type': 'string',
        'allowed': ['postponed']
    }
}
