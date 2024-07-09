const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000
const app = express()
app.use(cors())
app.use(bodyParser.json())
const api = require('./routes/api')

app.use('/api', api)
app.get('/', function (req, res) {
    res.send("hello")
})
app.listen(PORT, function () {
    console.log("Server Running on localhost:" + PORT)
})