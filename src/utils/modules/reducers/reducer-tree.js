'use strict';

var createDbReducer = require("./reducer-db")

module.exports = function createTreeReducer(config, defaultState){
    // create config (will override dbConfig)
    var defaultConfig = {
        // all entities are stored in a object 'nodes'
        byId: 'nodes',
        // the root ids are stored in an array 'root'
        allIds: 'root'
    }
    
    var config = Object.assign({}, defaultConfig, config)
    
    return createDbReducer(config, defaultState)
}