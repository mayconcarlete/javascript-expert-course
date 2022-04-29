const express = require("express")
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const cors = require("cors")
const checkJwt = auth({
  audience: 'https://in-app-appeal',
  issuerBaseURL: 'https://dev-hqo639s8.us.auth0.com'
})
const scopes = requiredScopes("read:user")
const app = express()
const test = (req, res, next) => {
  console.log("entrei aqui")
  next()
  return
}
const Enums = {TEST_MODE: true}

app.use(cors())
app.use(express.json())

app.get("/", checkJwt, scopes, (req, res, next) => {
  try{
    res.send({data:"bora porrra"})
  }catch(e){
    console.log("Errou: ", e)
    res.status(500).send({error:"Ja era"})
  }
})



app.listen(3003, () => console.log("we are on fire"))
