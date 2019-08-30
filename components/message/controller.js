const validation            = require('./validation');
const messageDAO            = require('./dao');
const sns                   = require('@moneyou/lib/sns');

const ValidationError       = require('./errors/validation');

module.exports = {
    send: async (data) => {
        const validationResult = validation.message(data);
        if (validationResult.error) {
			throw new ValidationError(validationResult.error);
        }
        const message = validationResult.value;
        if (message.recipientTypes.includes('SMS')) {
            await sns.sendSMS(message.phoneNumber, message.content);
        }
        return messageDAO.create(message);
    },
    getByRecipient: (recipient) => {
        return messageDAO.getByRecipient(recipient);
    }
};
