const mongoose = require('mongoose')

const Schema = mongoose.Schema


const doctorDocument = Schema({
    firstName: {
        type: String,
        required: [true, "First name is needed"],
      },
    
      lastName: {
        type: String,
        required: [true, "Last name is needed"],
      },

      speciality: {
        type: String,
        required: [true, "Speciality is needed"],
      },

    }, { collection: 'Doctor' }); // Specify the collection name here



const Doctor = mongoose.model("Doctor", doctorDocument);
module.exports = Doctor;