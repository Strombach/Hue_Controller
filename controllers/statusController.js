const superagent = require('superagent')

const statusController = {}

const url = process.env.HUE_URL
const userId = process.env.USER_ID

statusController.status = async (req, res, next) => {
  try {
    const response = await superagent.get(url + userId + '/lights')

    res.json(response.body)
  } catch (error) {
    res.send(error)
  }
}

module.exports = statusController
