const BaseJoi       = require('joi');
const Extension     = require('joi-date-extensions');
const Joi           = BaseJoi.extend(Extension);


const messageSchema = Joi.object().keys({
    recipientTypes: Joi.array().items(
        Joi.string().allow('SMS', 'EMAIL').required()
    ).required(),
    phoneNumber: Joi.string(),
    email: Joi.string(),
    subject: Joi.string(),
    content: Joi.string().required(),
    recipient: Joi.string().required(),
});

module.exports = {
    message: (object) => {
        return Joi.validate(object, messageSchema, { stripUnknown: true });
    }
};
