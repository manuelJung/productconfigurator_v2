import config from 'utils/config'

export const UPDATE_FIELD = 'form/UPDATE_FIELD'

export const updateField = (name, value) => ({
    type: UPDATE_FIELD,
    name,
    value
})

export const getFields = (state) => state

const getDefaultState = () => {
    var defaultState = {}
    config.form.fields.forEach( field => {
        defaultState[field] = ''
    })
    return defaultState
}
export const defaultState = getDefaultState()


export default function (state = defaultState, action){
    switch(action.type){
        case UPDATE_FIELD: return { ...state, [action.name]: action.value }
        default: return state
    }
}