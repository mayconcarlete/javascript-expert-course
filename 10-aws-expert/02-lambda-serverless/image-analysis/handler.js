"use strict";

class Handler {
  async main(event){
    try{
      return {
        statusCode: 200,
        body: 'ok'
      }
    }catch(error){
      console.log('Error ****', error.stack)
      return {
        statusCode: 500,
        body: 'Internal Server Error'
      }
    }
  }
}
const aws = require('aws-sdk')
const reko = new aws.Rekognition()
const handler =  new Handler({
  rekoSvc = reko
})

module.exports.main = handler.main.bind(handler)