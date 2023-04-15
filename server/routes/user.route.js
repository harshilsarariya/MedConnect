const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const router = require("express").Router();

// POST /signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const patientId = "P" + Date.now().toString();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      name,
      email,
      phone,
      password: hashedPassword,
      patientId,
    });
    await user.save();
    res.status(201).send({ success: true, user });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Return token and user data
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /users
router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});

// GET /users/:patientId
router.get("/:patientId", async (req, res) => {
  const patientId = req.params.patientId;

  try {
    const user = await UserModel.findOne({ patientId });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

// PATCH /users/:patientId
router.put("/:patientId", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "phone", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await UserModel.findOne({ patientId: req.params.patientId });
    if (!user) {
      return res.status(404).send();
    }

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE /users/:patientId
router.delete("/:patientId", async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete({
      patientId: req.params.patientId,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

// POST /:id/medicalrecords
router.post("/:id/medicalrecords", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const {
      hospitalName,
      doctorName,
      appointmentDate,
      diagnosis,
      medications,
      testResults,
    } = req.body;

    const medicalRecord = {
      hospitalName,
      doctorName,
      appointmentDate,
      diagnosis,
      medications,
      testResults,
    };

    user.medicalRecords.push(medicalRecord);
    await user.save();

    return res
      .status(201)
      .send({ message: "Medical record added successfully", medicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = router;
