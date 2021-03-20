const express = require('express')
const router = express.Router()

const controller = require('../controllers/stateController')

router.get('/', controller.state)

router.post('/:light/onoff', controller.updateOnOff)

module.exports = router
