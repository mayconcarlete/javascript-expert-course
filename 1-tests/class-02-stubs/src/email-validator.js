const validator = require('email-validator')

class EmailValidator {
  perform(email){
    return validator.validate(email)
  }
}

module.exports = EmailValidator