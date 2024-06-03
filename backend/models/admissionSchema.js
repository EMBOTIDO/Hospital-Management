const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const admissionDocument = Schema({
    admissionDate: {
        type: Date,
        default: new Date()
    },

    dischargeDate: {
        type: Date,
        default: null
    },

    diagnosis: {
        type: String,
        default: "ingoing diagnosing.."
    }

}, { collection: 'Admission' }); // Specify the collection name here


const Admission = mongoose.model("Admission", admissionDocument);
module.exports = Admission;