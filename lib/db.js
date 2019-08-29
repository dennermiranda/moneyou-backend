const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let isConnected;

module.exports = {
    connect: async () => {
        if (isConnected) {
            return Promise.resolve();
        }
        const db = await mongoose.connect(process.env.DB_URL);
        isConnected = db.connections[0].readyState;
    }
};
