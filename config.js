var fs = require('fs');
var configurationFile =  'configuration.json';

var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);
module.exports = configuration;