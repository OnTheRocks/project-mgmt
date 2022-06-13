const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log('MongoDB Connected: ${conn.connection.host}'.cyan.underline);
  console.log('MongoDB Connected:'.magenta.underline.bold + conn.connection.host .yellow.underline.bold);
};

module.exports = connectDB;