"use strict";
const {promises: { readFile } } = require('fs')
const axios = require('axios')
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
    return result
  }
  async getImageBuffer(imgUrl){
    const response = await axios.get(imgUrl, {
      responseType: 'arraybuffer'
    })
    const buffer = Buffer.from(response.data, 'base64')
    return buffer
  }
  async main(event){
    try{
      const { imgUrl } = event.queryStringParameters
      const imgBuffer = await this.getImageBuffer(imgUrl)
      const response = await this.detectImages(imgBuffer)
      return {
        statusCode: 200,
        body: response
      }
    }catch(error){
      console.log('Error ****', error.stack)
      return {
        statusCode: 500,
        body: {
          error,
          stack: error.stack
        }
      }
    }
  }
}
const aws = require('aws-sdk');
const { AlexaForBusiness } = require('aws-sdk');
const reko = new aws.Rekognition()
const handler =  new Handler({
  rekoSvc:reko
})

module.exports.main = handler.main.bind(handler)