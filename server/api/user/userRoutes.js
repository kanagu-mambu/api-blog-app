
var logger = require('../../util/logger')
var router = require('express').Router()

router.route('/')
    .get(function (req, resp) {

        logger.log("Hey from user")
        resp.send({ ok: true })

    })

module.exports = router