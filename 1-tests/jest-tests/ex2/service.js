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

module.exports = { facetec, Person, validateEmail }