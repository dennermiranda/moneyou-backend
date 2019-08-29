const uuid = require('uuid');

module.exports = {
	name: 'message',
	tableName: 'messages',
	create: (json) => {
		const object = {};
		json = json || {};
		object.id		       = json.id || uuid.v1();
		object.recipientTypes  = json.recipientTypes;
		object.phoneNumber     = json.phoneNumber;
		object.email           = json.email;
		object.subject         = json.subject;
		object.content         = json.content;
		object.recipient       = json.recipient;
		return object;
	}
};
