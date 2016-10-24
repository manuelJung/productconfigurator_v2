'use strict';

module.exports = function createDefaultReducer(config, defaultState){
    var defaultState =  defaultState ? defaultState
                       :defaultState === 0 ? 0
                       : {}
    
    return (handlers) => (state, action) => {
        var state = state || defaultState
        const handler = handlers && action ? handlers[action.type] : null
        
        return handler ? handler(state, action) : state
    }
}