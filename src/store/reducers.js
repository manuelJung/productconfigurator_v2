import { combineReducers } from 'redux'
import locationReducer from './location'
import uiReducer from './ui'
import formReducer from 'modules/form'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ui: uiReducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
