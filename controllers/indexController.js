const superagent = require('superagent')

const indexController = {}

const url = process.env.HUE_URL
const userId = process.env.USER_ID

indexController.index = async (req, res, next) => {
  try {
    const response = await superagent.get(url + userId + '/lights')

    res.json(response.body)
  } catch (error) {
    res.send(error)
  }
}

module.exports = indexController
