const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
