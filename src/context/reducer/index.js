import combineReducers from 'react-combine-reducers'
import {
    cursorReducer,
    cursorReducerInitialState
} from 'context/reducer/cursor'
import {
    scrollReducer,
    scrollReducerInitialState
} from 'context/reducer/scroll'

export const [rootReducer, initialRootState] = combineReducers({
    cursor: [cursorReducer, cursorReducerInitialState],
    scroll: [scrollReducer, scrollReducerInitialState]
})
