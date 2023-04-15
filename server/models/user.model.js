const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  doctorName: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  diagnosis: { type: String, required: true },
  medications: [{ type: String }],
  testResults: [{ type: String }],
});

const UserSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
  patientId: { type: String, unique: true },
  medicalRecords: [medicalRecordSchema],
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
