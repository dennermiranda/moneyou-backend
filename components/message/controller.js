const validation            = require('./validation');
const messageDAO            = require('./dao');

const ValidationError       = require('./errors/validation');

module.exports = {
    send: (data) => {
        const validationResult = validation.message(data);
        if (validationResult.error) {
			throw new ValidationError(validationResult.error);
        }
        return messageDAO.create(validationResult.value);
    },
    getByRecipient: (recipient) => {
        return messageDAO.getByRecipient(recipient);
    }
};
