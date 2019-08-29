module.exports = {
    jsonResponse: (statusCode, object) => {
        let body;
        if (object instanceof Error) {
            body = JSON.stringify({ name: object.name, message: object.message });
        } else {
            body = JSON.stringify(object);
        }
        return {
            statusCode: statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: body
        };
    }
};
