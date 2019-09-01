const AWS      = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const ses      = new AWS.SES({ apiVersion: '2010-12-01' });
const DEFAULT_SENDER_EMAIL = 'denner.miranda@gmail.com';

module.exports = {
    sendEmail: async (email, subject, message) => {
        const params = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: message
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: message
                    }
                    },
                    Subject: {
                        Charset: 'UTF-8',
                        Data: subject
                    }
            },
            Source: DEFAULT_SENDER_EMAIL
        };
        return new Promise ((resolve, reject) => {
            ses.sendEmail(params, function(err, result) {
                if (err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};
