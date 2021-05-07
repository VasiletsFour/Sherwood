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
    },
    "beforeDate": {
        'type': 'string',
        'nullable': True,
        'maxlength': 10
    },
    "fromDate": {
        'type': 'string',
        'nullable': True,
        'maxlength': 10
    }
}
