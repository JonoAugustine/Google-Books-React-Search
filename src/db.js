const { connect } = require("mongoose");

module.exports = {
  /**
   * Attempt to connect to Mongo; crash if failed.
   */
  connect: async () => {
    try {
      const {
        connection: {
          host,
          db: { databaseName: db }
        }
      } = await connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/gbs", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });

      console.log(`Connected to MongoDB: ${host} ${db}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
};
