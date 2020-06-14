const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String },
  lastName: { type: String },
  companyName: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
});

module.exports = mongoose.model("User", userSchema);
