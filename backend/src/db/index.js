const { NODE_ENV, MONGO_URI, MONGO_USER, MONGO_PWD } = process.env;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  connect() {
    return new Promise(async (resolve, reject) => {
      const connectMongoose = () => {
        return mongoose.connect(MONGO_URI, {
          user: MONGO_USER,
          pass: MONGO_PWD,
          dbName: 'beginner-blog',
          useNewUrlParser: true,
        });
      };

      try {
        if (NODE_ENV !== 'production') mongoose.set('debug', true);
        await connectMongoose();
        console.log('Mongodb connected');
        mongoose.connection.on('error', (err) => {
          console.error('Mongodb connection error', err);
        });
        mongoose.connection.on('disconnected', () => {
          console.error('The connection to the Mongodb has been lost. Retry the connection');
          connectMongoose();
        });
        resolve();
      } catch (err) {
        console.error('Mongodb connection error', err);
        reject(err);
      }
    });
  },
  async disconnect() {
    await mongoose.disconnect();
  },
};
