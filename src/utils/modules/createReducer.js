'use strict';

var createDefaultReducer = require("./reducers/reducer-default");
var createListReducer = require("./reducers/reducer-list");
var createDbReducer = require("./reducers/reducer-db");
var createTreeReducer = require("./reducers/reducer-tree");



module.exports = function createReducer(config, defaultState){
    let type = typeof config === 'object' ? config.type : config
    config = typeof config === 'object' ? config : { type: config }
    
    switch(type){
        case 'db': return createDbReducer(config, defaultState)
        case 'tree': return createTreeReducer(config, defaultState)
        case 'list': return createListReducer(config, defaultState)
        case 'obj':
        
        default: return createDefaultReducer(config, defaultState)
    }
}