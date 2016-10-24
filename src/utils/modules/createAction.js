'use strict';

module.exports = function createAction(type){
    return (payload, meta) => !!meta
        ? ({ type, payload, meta })
        : ({ type, payload })
}
