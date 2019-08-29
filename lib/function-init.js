let initiated = false;

module.exports = {
  global: () => {
    if (initiated) {
      return;
    }
    initiated = true;
    require('dotenv').config();
  },
  onCall: (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
  }
};
