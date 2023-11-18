require('dotenv').config(); // This should be the first line to ensure environment variables are loaded first

console.log(process.env.MONGODB_CONNECTION_STRING);

const expressConfig = require('./config/express'); // This should be a function that returns an express app
const { connectDB } = require("./config/DBManager.js"); // Ensure correct case-sensitivity in file paths and method names

var app = expressConfig(); // Invoke the function to get the express app
const port = process.env.PORT || 3000; // Use the PORT from environment variables if defined, otherwise default to 3000

// Connect to the database before starting the server
connectDB().then(() => {
    app.listen(port, function() {
        console.log(`Server listening on port ${port}`);
    });
}).catch(err => {
    console.error('Database connection failed', err);
    process.exit(1); // Exit the process if the database connection fails
});

module.exports = app; // This is usually not necessary unless you're exporting the app for testing purposes
