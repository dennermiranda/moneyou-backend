const functionInit  = require('@moneyou/lib/function-init');
const api           = require('@moneyou/lib/api');
const controller    = require('./controller');

functionInit.global();

module.exports.send = async (event, context) => {
    try {
        functionInit.onCall(event, context);
        await controller.send(event.body);
        return api.jsonResponse(200, { message: 'OK' });
    } catch (error) {
        return api.jsonResponse(error.status || 500, error);
    }
};

module.exports.getByRecipient = async (event, context) => {
    try {
        functionInit.onCall(event, context);
        const project = await controller.getByRecipient(event.pathParameters.recipient);
        return api.jsonResponse(200, project);
    } catch (error) {
        return api.jsonResponse(error.status || 500, error);
    }
};
