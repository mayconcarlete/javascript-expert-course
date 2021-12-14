const validator = require('email-validator')
const sinon = require('sinon')
const { deepStrictEqual } = require('assert')
const EmailValidator = require('./email-validator');
;

(
  async() => {
    const emailValidator = new EmailValidator()
    const stub = sinon.stub(validator, 'validate')
    const email1 = 'maycon.carlete@gmail.com'
    stub.withArgs(email1).returns(true)
    const email2 = 'invalid@mail.com'
    stub.withArgs(email2).returns(false)

    const response1 = emailValidator.perform(email1)
    deepStrictEqual(response1, true)

    const response2 = emailValidator.perform(email2)
    deepStrictEqual(response2, false)
  }
)()