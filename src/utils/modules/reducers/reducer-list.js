'use strict';

var createDefaultReducer = require("./reducer-default")


module.exports = function createListReducer(config, defaultState){
    var defaultState = defaultState || []
    
    return createDefaultReducer(config, defaultState)
}