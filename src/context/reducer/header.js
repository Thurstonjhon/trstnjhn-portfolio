import { SET_PROJECT } from 'context/action/actionTypes'

export const headerReducer = (state, action) => {
    switch (action.type) {
        case SET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        default:
            return state
    }
}

export const headerReducerInitialState = {
    project: null
}
