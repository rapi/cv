module.exports.lib = require('express');
module.exports.app= module.exports.lib();
module.exports.listen= new(require('./listen'));
module.exports.destructor=()=>{
    if(module.exports.listen.destructor)module.exports.listen.destructor()
    if(module.exports.app.destructor)module.exports.app.destructor()
};

