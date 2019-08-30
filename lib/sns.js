const AWS      = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const sns      = new AWS.SNS({ apiVersion: '2010-03-31' });

module.exports = {
    sendSMS: async (phoneNumber, message) => {
        const params = {
            Message: message,
            PhoneNumber: phoneNumber
        };

        return new Promise ((resolve, reject) => {
            sns.publish(params, function(err, result) {
                if (err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};
