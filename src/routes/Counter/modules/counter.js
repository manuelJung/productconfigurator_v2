import { createAction, createReducer  } from 'utils/modules'


// ------------------------------------
// Actions
// ------------------------------------
export const increment = (value = 1) => createAction('COUNTER_INCREMENT')(value)

export const doubleAsync = () => (dispatch, getState, api) => new Promise( (resolve) => {
    setTimeout( () => {
        dispatch(increment(getState().counter))
        resolve()
    }, 200)
})


export const actions = {
    increment,
    doubleAsync
}


// ------------------------------------
// Actions
// ------------------------------------
export const getCounter = (state) => state

export const selectors = {
    getCounter
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer('number', 0)({
    'COUNTER_INCREMENT' : (state, action) => state + action.payload
})
