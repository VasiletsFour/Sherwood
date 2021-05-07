allowed = ['asc', 'desc']

query = {
    'search': {
        'type': 'string',
        'nullable': True,
        'maxlength': 100
    },
    'sortBy': {
        'type': 'string',
        'nullable': True,
        'maxlength': 100
    },
    "kind": {
        'type': 'string',
        'nullable': True,
        'allowed': allowed
    }
}
