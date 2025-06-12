const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
//const mongoURL =process.env.MONGODB_URL_LOCAL;
const mongoURL= process.env.MONGODB_URL;
// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURL);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
  }
}

// Call the function
connectToMongoDB();

// Get default connection
const db = mongoose.connection;

// Additional event listeners
db.on('disconnected', () => {
  console.log('⚠️ MongoDB Disconnected');
});

db.on('error', (err) => {
  console.log('❌ MongoDB error:', err);
});

module.exports = db;
