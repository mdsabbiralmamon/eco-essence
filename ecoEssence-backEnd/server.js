const express = require("express");
const cors = require("cors");
require("dotenv").config();
const client = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./utils/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB and start the server
async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Routes
    app.use("/api/users", userRoutes);

    app.use(errorHandler); // Error handling middleware

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

run().catch(console.dir);
