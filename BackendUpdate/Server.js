const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json()); // Middleware for parsing JSON
app.use(cors()); // Enable CORS

// Serve static files from the 'Uploadsimg' directory
app.use('/Uploadsimg', express.static(path.join(__dirname, 'Uploadsimg')));

// Connect to MongoDB
const MONGODB_URL = "mongodb://localhost:27017/Foodshop";
mongoose.connect(MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

// Import and use product routes
const productroutes = require("./Routers/ProudctRoutes")
app.use(productroutes)


// Start the server
const PORT = 4023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
