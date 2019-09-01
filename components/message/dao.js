const db			= require('@moneyou/lib/db');
const Message	    = require('@moneyou/models/message');

module.exports = {
	create: async data => {
		const message = Message.create(data);
		const params = {
			TableName: process.env.DYNAMO_TABLE,
			Item: message
		};
		return new Promise ((resolve, reject) => {
			db.put(params, function(err, result) {
                if (err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
		});
	},
	getByRecipient: async recipient => {
		const params = {
			TableName: process.env.DYNAMO_TABLE,
			FilterExpression: 'recipient = :recipient',
			ExpressionAttributeValues: {
				':recipient': recipient
			}
		};
		const result = await new Promise ((resolve, reject) => {
			db.scan(params, function(err, result) {
                if (err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
		});
		return result.Items.map(result => Message.create(result));
	},
};
