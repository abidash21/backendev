
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/google',(req,res) => {
    res.send('abidashdot21')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please Login at chai aur code</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})