const express = require('express')
const router = express.Router()

const controller = require('../controllers/stateController')

router.get('/', controller.state)

router.get('/:light/off', controller.updateState)

module.exports = router
