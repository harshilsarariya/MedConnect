const Hospital = require("../models/hospital.model");
const router = require("express").Router();

// Create a new hospital:
router.post("/addHospital", (req, res) => {
  const { name, address, phone, hospitalId } = req.body;
  const newHospital = new Hospital({
    name,
    address,
    phone,
    hospitalId,
  });
  newHospital
    .save()
    .then((hospital) => res.status(201).json(hospital))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get all hospitals:
router.get("/getHospitals", (req, res) => {
  Hospital.find()
    .then((hospitals) => res.json(hospitals))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Get a specific hospital by ID:
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Hospital.findById(id)
    .then((hospital) => res.json(hospital))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Update a hospital by ID:
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, address, phone, hospitalId } = req.body;
  Hospital.findByIdAndUpdate(
    id,
    { name, address, phone, hospitalId },
    { new: true }
  )
    .then((hospital) => res.json(hospital))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Delete a hospital by ID:
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Hospital.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
