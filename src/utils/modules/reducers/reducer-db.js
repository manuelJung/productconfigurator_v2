'use strict';

module.exports = function createDbReducer(config, defaultState){
    // create config
    var defaultConfig = {
        // custom list names which hold ids of the byId obj
        filters: [],
        // name of the byId prop
        byId: 'byId',
        // name of the allIds prop (if null, no list available)
        allIds: 'allIds'
    }
    
    var config = Object.assign({}, defaultConfig, config)
    
    return (handlers) => (state, action) => {
        const handler = handlers && action ? handlers[action.type] : null
        
        // set default state
        if(!state){
            state = { [config.byId]: {} }
            if(config.allIds) state[config.allIds] = []
            config.filters.forEach( filter => state[filter] = [])
            
            if(defaultState) Object.assign(state, defaultState)
        }
        
        // return if no handler matched
        if(!handler){
            return state
        }
        // if handler is an array, then the fist arg is the allIds handler
        // the second arg (or first, if no allIds node exists in config) is the byId handler
        // the third arg (or second, if no allIds node exists in config) is an obj, with holds key/values
        // where the key is the filter name
        // and the value is the corresponding handler
        const isArray = Array.isArray(handler)
        const byIdHandler = isArray && config.allIds ? handler[1] 
            : isArray ? handler[0]
            : handler
        const allIdsHandler = isArray && config.allIds ? handler[0] : null
        const filtersHandler = isArray && config.allIds ? handler[2] 
            : isArray ? handler[1]
            : null
        const newState = Object.assign({}, state)
        
        if(!isArray){
            return Object.assign(newState, { [config.byId]: byIdHandler(state[config.byId], action) })
        }
        
        if(byIdHandler){
            Object.assign(newState, { [config.byId]: byIdHandler(state[config.byId], action) })
        }
        
        if(allIdsHandler){
            Object.assign(newState, { [config.allIds]: allIdsHandler(state[config.allIds], action) })
        }
        
        if(filtersHandler){
            Object.keys(filtersHandler).forEach( filterName => {
                Object.assign(newState, { [filterName]: filtersHandler[filterName](state[filterName], action) })
            })
        }
        
        return newState
    }
}