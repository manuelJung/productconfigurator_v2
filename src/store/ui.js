import { createAction, createReducer } from 'utils/modules'

export const updateUi = (key, value) => createAction('UPDATE_UI')({ key, value })

export const actions = {
    updateUi
}



export const getUiValue = (state, key) => state[key]

export const selectors = {
    getUiValue
}



export default createReducer('obj')({
    'UPDATE_UI': (state, { payload }) => ({ ...state, [payload.key]: payload.value })
})