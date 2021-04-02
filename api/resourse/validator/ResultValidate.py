allowedResult = ['win', 'draw', 'lose']

create = {
    'match': {
        'type': 'integer',
        'required': True
    },
    'homeResult': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goalHome': {
        'type': 'integer',
        'required': True
    },
    'visitorsResult': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goalVisitors': {
        'type': 'integer',
        'required': True
    }
}

update = {
    'homeResult': {
        'type': 'string',
        'allowed': allowedResult,
    },
    'goalHome': {
        'type': 'integer',
    },
    'visitorsResult': {
        'type': 'string',
        'allowed': allowedResult,
    },
    'goalVisitors': {
        'type': 'integer',
    }
}
