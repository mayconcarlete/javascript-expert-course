"use strict";
const {promises: { readFile } } = require('fs')
class Handler {
  constructor({rekoSvc}){
    this.rekoSvc = rekoSvc
  }
  async detectImages(buffer){
    const result = await this.rekoSvc.detectLabels({
      Image:{
        Bytes: buffer
      }
    }).promise()
    console.log(result)
  }
  async main(event){
    try{
      const imgBuffer = await readFile('dog.jpg')
      await this.detectImages(imgBuffer)
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
  rekoSvc:reko
})

module.exports.main = handler.main.bind(handler)