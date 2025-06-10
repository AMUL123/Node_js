const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

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
