const superagent = require('superagent')

const stateController = {}

const url = process.env.HUE_URL
const userId = process.env.USER_ID

stateController.state = async (req, res, next) => {
  try {
    const response = await superagent.get(url + userId + '/lights')

    res.json(response.body)
  } catch (error) {
    res.send(error)
  }
}

stateController.updateOnOff = async (req, res, next) => {
  try {
    const testUrl = `${url}${userId}/lights/${req.params.light}/state`
    const response = await superagent.put(testUrl).send({ on: req.body.on })

    res.json(response.body)
  } catch (error) {
    res.send(error)
  }
}

module.exports = stateController
