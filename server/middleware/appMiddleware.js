var morgan = require('morgan')
var bodyParser = require('body-parser')

//setup global middleare

module.exports = function (app) {

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

}