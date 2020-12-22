
var logger = require('../../util/logger')
var router = require('express').Router()

router.route('/')
    .get(function (req, resp) {

        logger.log("Hey from posts")
        resp.send({ ok: true })

    })

module.exports = router