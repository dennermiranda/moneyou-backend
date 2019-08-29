const db			= require('@moneyou/lib/db');
const Message	    = require('@moneyou/models/message');

module.exports = {
	create: async data => {
		const params = {
			TableName: Message.tableName,
			Item: data
		};
		return db.put(params);
	},
	getByRecipient: async id => {
		await db.connect();
        return Message.findById(id);
	},
};
