const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello Ahmed from Rabbit SAP GUI 1 & GUI 2')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })