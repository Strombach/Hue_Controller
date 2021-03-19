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

statusController.updateState = async (req, res, next) => {
  try {
    const testUrl = `${url}${userId}/lights/${req.params.light}/state`
    const response = await superagent.put(testUrl).send({ on: true })

    res.json(response.body)
  } catch (error) {
    res.send(error)
  }
}

module.exports = statusController
