var express = require('express')
var app = express();

var api = require('./api/api')


//setup middleware
require('./middleware/appMiddleware')(app)

//setup api
app.use('/api', api)


app.use(function (err, req, res, nex) {
    console.log(err.message)
    res.send(500)
})

//export the app for testing
module.exports = app;