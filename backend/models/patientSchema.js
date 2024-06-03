const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientDocument = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is needed"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is needed"],
    },
    age: {
      type: Number,
      required: [true, "Age is needed"],
    },
    confined: {
      type: Boolean,
      default: true,
    },
    dateConfined: {
      type: Date,
      default: Date.now, // Change to a function to set the current date
    },
  },
  { collection: 'Patient' } // Specify the collection name here
);

const Patient = mongoose.model("Patient", patientDocument);
module.exports = Patient;
