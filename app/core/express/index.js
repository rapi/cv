module.exports.lib = require('express');
module.exports.app= module.exports.lib();
module.exports.listen= new(require('./listen'));

