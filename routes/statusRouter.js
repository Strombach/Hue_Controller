const express = require('express')
const router = express.Router()

const controller = require('../controllers/statusController')

router.get('/', controller.status)

module.exports = router
