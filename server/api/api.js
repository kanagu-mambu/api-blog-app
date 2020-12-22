//api router will mount routers of other resources

var router = require('express').Router()

router.use('/categories', require('./category/categoryRoutes'))
router.use('/users', require('./user/userRoutes'))
router.use('/posts', require('./post/postRoutes'))

module.exports = router
