export const triggerReducer={
    loading: false,
    data: null,
    finished: false,
    error: null,
}

export const runningReducer = {
    loading: true,
    data: null,
    finished: false,
    error: null,
}

export const okReducer = {
    loading: false,
    finished: true,
    error: null,
}

export const errorReducer = {
    loading: false,
    data: null,
    finished: false
}