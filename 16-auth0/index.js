const express = require("express")
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const cors = require("cors")
const checkJwt = auth({
  audience: 'https://quickstarts/api',
  issuerBaseURL: 'https://dev-hqo639s8.us.auth0.com'
})
const scopes = requiredScopes("read:user")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", checkJwt, scopes, (req, res) => {
  res.send({data:"bora porrra"})
})

module.exports = app