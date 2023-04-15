const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// database configurations
require("./database/index");

const app = express();

// enviorment variables configurations
dotenv.config();

// routes import

const userRoute = require("./routes/user.route");
const hospitalRoute = require("./routes/hospital.route");

// Middleware
app.use(express.json());
app.use(cors());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoute);
app.use("/api/hospital", hospitalRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
