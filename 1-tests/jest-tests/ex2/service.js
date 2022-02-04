const axios = require('axios').default

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

module.exports = { facetec, Person, validateEmail, makeRequest }