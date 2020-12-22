//Intro point of the server

//   If we have index.js file in the root folder, and if we require that folder, then
//   node will automatically require index.js on the root

//setup config object
var config = require('./server/config/config')

//get app object
var app = require('./server/server')

//get logger object
var logger = require('./server/util/logger')


app.listen(config.port)

logger.log('Listening on http://localhost:' + config.port)