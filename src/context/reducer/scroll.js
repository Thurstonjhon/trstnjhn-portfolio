import {
    SET_SCROLL,
    SET_SCROLL_POSITION,
    SET_SCROLL_STATUS,
    SET_LS
} from 'context/action/actionTypes'

export const scrollReducer = (state, action) => {
    switch (action.type) {
        case SET_SCROLL:
            return {
                ...state,
                instance: action.payload
            }
        case SET_SCROLL_POSITION:
            return {
                ...state,
                position: action.payload
            }
        case SET_SCROLL_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_LS:
            return {
                ...state,
                ls: action.payload
            }
        default:
            return state
    }
}

export const scrollReducerInitialState = {
    instance: null,
    ls: null,
    position: 0,
    status: 'inactive'
}
