allowedResult = ['win', 'draw', 'lose']

create = {
    'match_id': {
        'type': 'integer',
        'required': True
    },
    'status_host': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goal_host': {
        'type': 'integer',
        'required': True
    },
    'status_guest': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goal_guest': {
        'type': 'integer',
        'required': True
    }
}

update = {
    'status_host': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goal_host': {
        'type': 'integer',
        'required': True
    },
    'status_guest': {
        'type': 'string',
        'allowed': allowedResult,
        'required': True
    },
    'goal_guest': {
        'type': 'integer',
        'required': True
    }
}
