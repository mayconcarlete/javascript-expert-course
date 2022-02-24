const vogels = require("dynogels-promisified")
const Joi = require("joi")

// vogels.AWS.config.update({region: 'ca-central-1'})
vogels.AWS.config.update({
  accessKeyId: 'DUMMY_ID',
  secretAccessKey: 'DUMMY_KEY',
  region: 'ca-central-1',
  endpoint: 'http://localhost:4200'
})

const Test = vogels.define("test", {
  hashKey: "eventId",
  rangeKey: "type",

  schema: {

      eventId: Joi.string().required(),
      type: Joi.string().required(),
      uid: Joi.string().required(),
      startTime: Joi.number().required(),
      endTime: Joi.number().required(),
      seenDate: Joi.number(),
  },

  indexes: [
      // This index will be used to query events of a specific type.
      {
          hashKey: "uid",
          rangeKey: "type",
          name: "uid-type-index",
          type: "global",
      },
  ],

  validation: { allowUnknown: true },
});

Object.assign(Test.prototype, {
  hello(){
    console.log('hello world')
  }
})
// Test.config({dynamodb:{config:{region:'ca-central-1'}}})
module.exports = Test