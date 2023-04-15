const UserModel = require("../models/user.model");
const moment = require("moment");
const router = require("express").Router();

// POST /createUser
router.post("/createUser", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
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

module.exports = router;
