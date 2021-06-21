import { SET_CURSOR } from 'context/action/actionTypes'
import { cursors } from 'utils/common.const'

export const cursorReducer = (state, action) => {
    switch (action.type) {
        case SET_CURSOR:
            return {
                ...state,
                cursorStyle: action.payload
            }
        default:
            return state
    }
}

export const cursorReducerInitialState = {
    cursorStyle: cursors.DEFAULT
}
