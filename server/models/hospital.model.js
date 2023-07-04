const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  hospitalId: { type: String, unique: true },
});

const HospitalModel = mongoose.model("Hospital", hospitalSchema);

module.exports = HospitalModel;
