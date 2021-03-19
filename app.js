const express = require('express')
const app = express()

require('dotenv').config({ path: '.env' })

const port = 4000

app.get('/', require('./routes/indexRouter'))

app.use((req, res, next) => {
  res.status(404).json('Not Found')
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal Server Error')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
