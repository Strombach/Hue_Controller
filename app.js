const express = require('express')
const app = express()

const port = 4000

app.get('/', require('./routes/indexRouter'))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
