const Login = require('./login')
const sinon = require('sinon')
const {deepStrictEqual} = require('assert')

;

(
  async() => {
    {
      const login = new Login()
      const stub = sinon.stub(login, login.makeRequest.name)
      stub.withArgs(true).resolves(false)

      const response = await login.perfom()
      deepStrictEqual(response.statusCode, 401)
    }
  }
)()