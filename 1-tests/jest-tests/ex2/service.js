const axios = require('axios').default
const validator = require('email-validator')


const facetec = {
  verifyFace(v1, v2){
    const data = new Date()
    return data.toISOString()
  }
}

class Person {
  validate(email){
    return this.isValid(email)
  }
  isValid(email){
    return true
  }
}

const validateEmail = (email) => {
  return true
}

const makeRequest = async( url = 'https://pokeapi.co/api/v2/pokemon/ditto' ) => {
  const response = await axios.get(url)
  return response
}

const getDate = () => {
  const date = Date.now(1)
  return date
}

const getDateConstructor = () => {
  const date = new Date()
  return date
}

const validateEmailLib = (email) => {
  return validator.validate(email)
}

module.exports = { facetec, Person, validateEmail, makeRequest, getDate, getDateConstructor, validateEmailLib }