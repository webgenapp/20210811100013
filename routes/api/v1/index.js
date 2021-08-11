const express = require('express')
const router = express.Router()

const asRouter = require('./as')
router.use('/as', asRouter)

const bsRouter = require('./bs')
router.use('/bs', bsRouter)

const csRouter = require('./cs')
router.use('/cs', csRouter)

const dsRouter = require('./ds')
router.use('/ds', dsRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
