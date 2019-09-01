const validation            = require('./validation');
const messageDAO            = require('./dao');
const sns                   = require('@moneyou/lib/sns');
const ses                   = require('@moneyou/lib/ses');
const Message               = require('@moneyou/models/message');

const ValidationError       = require('./errors/validation');

const SMS_DEFAULT_IDENTIFIER = 'SMS';
const EMAIL_DEFAULT_IDENTIFIER = 'EMAIL';

module.exports = {
    send: async (data) => {
        const validationResult = validation.message(data);
        if (validationResult.error) {
			throw new ValidationError(validationResult.error);
        }
        const message = Message.create(validationResult.value);
        if (message.recipientTypes.includes(SMS_DEFAULT_IDENTIFIER)) {
            await sns.sendSMS(message.phoneNumber, message.content);
        }

        if (message.recipientTypes.includes(EMAIL_DEFAULT_IDENTIFIER)) {
            await ses.sendEmail(message.email, message.subject, message.content);
        }
        return messageDAO.create(message);
    },
    getByRecipient: (recipient) => {
        return messageDAO.getByRecipient(recipient);
    }
};
