const { describe, it } = require('mocha')
const request = require('supertest')
const server = require('./api')
const assert = require('assert')

describe('Api suite test', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP status 200', async() => {
      const response = await request(server)
        .get('/contact')
        .expect(200)
      assert.deepStrictEqual(response.text, 'Contact us page')
    })
  })
  describe('/hello', () => {
    it('should request an inexistent route /hi and redirect to /hello', async() => {
      const response = await request(server)
        .get('/hi')
        .expect(200)

      assert.deepStrictEqual(response.text, 'Hello Worldao')
    })
  })
  describe('/login', () => {
    it('should login succesfully on the login route and return HTTP status 200', async() => {
      const response = await request(server)
        .post('/login')
        .send({username: 'maykerops', password: '123'})
        .expect(200)

      assert.deepStrictEqual(response.text, 'Logging has succeeded')
    })
    it('should return unauthorized when wrong credentials has provided', async() => {
      const response = await request(server)
        .post('/login')
        .send({username: 'invalid', password: 'invalid'})
        .expect(401)

      assert.deepStrictEqual(response.text, 'Logging failed')
    })
  })
})