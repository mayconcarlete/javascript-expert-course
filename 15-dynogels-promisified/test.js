const vogels = require("dynogels-promisified")
const Joi = require("joi")

// vogels.AWS.config.update({region: 'ca-central-1'})
vogels.AWS.config.update({
  accessKeyId: 'DUMMY_ID',
  secretAccessKey: 'DUMMY_KEY',
  region: 'ca-central-1',
  endpoint: 'http://localhost:4200'
})
const AppealsModel = vogels.define("Appeals", {
  hashKey: "uid",
  rangeKey: "email",
  schema: {
      uid: Joi.string().required(),
      email: Joi.string().required(),

      appeals: Joi.array().items({
          b_reason: Joi.number(),
          sr: Joi.array().items(Joi.number()),
          aips: Joi.array().items(Joi.string()),
          spend: Joi.number(),
          faceVerified: Joi.boolean(),
          active_days_span: Joi.number(),
          tgp: Joi.number(),
          total_of_apps: Joi.number(),
          n_dids: Joi.number(),
          user_media_sources: Joi.array().items(Joi.string()),
          sc: Joi.string(),
          ipqs_fraud_score: Joi.number(),
          description: Joi.string().required(),
          status: Joi.number().valid(569, 570, 571).required().default(569),
          judgment: Joi.string(),
          codeReason: Joi.number().valid(534, 535, 547, 560).required(),
          alreadySeen: Joi.boolean().required().default(false),
          createdAt: Joi.number(),
          updatedAt: Joi.number(),
      }),
  },
});

class Appeals extends AppealsModel {
async createAppeal(uid, email){
  return await Appeals.getAsync(uid, email)
}
}
module.exports = Appeals