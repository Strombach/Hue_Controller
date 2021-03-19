const indexController = {}

indexController.index = (req, res, next) => {
  res.json('Index Success')
}

module.exports = indexController
