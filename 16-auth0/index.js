const express = require("express")
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require("cors")
const checkJwt = auth({
  audience: 'https://in-app-appeal',
  issuerBaseURL: `http://localhost:3002`
})
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", checkJwt, (req, res) => {
  res.send({data:"ok"})
})

module.exports = app