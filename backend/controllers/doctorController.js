const Doctor = require('../models/doctorSchema')




module.exports.doctors = (req, res) => {
    Doctor.find({})
    .then((doctors) => res.status(200).json(doctors))
    .catch((err) => res.status(500).json({error: err.message || "Internal Server Error in getting all doctors"}))
}

module.exports.doctor = (req, res) => {

    const doctorID = req.params.id

    Doctor.findById(doctorID)
    .then((doctor) => res.status(200).json(doctor))
    .catch((err) => res.status(500).json(err))

}


module.exports.createDoctor = (req, res) => {

    const { firstName, lastName, speciality } = req.body

    const newDoctor = Doctor({
        firstName,
        lastName,
        speciality    
    })

    try {

        const saveDoctor = newDoctor.save()
        res.status(201).json({'new doctor': newDoctor})

    } catch(err) {
        res.status(500).json({'Error': err.message || 'Error in creating a doctor'})

    }


};


module.exports.updateDoctor = (req, res) => {

    const { firstName, lastName, speciality } = req.body

    const updatedAttributes = {firstName, lastName, speciality }

    const doctorID = req.params.id;

    Doctor.findByIdAndUpdate(doctorID, updatedAttributes, {new: true})
    .then((updatedDoctorInfo) => res.status(200).json(updatedDoctorInfo))
    .catch((err) => res.status(500).json({error: err.message || "Error in updating doctor" }))


};


module.exports.deleteDoctor = (req, res) => {
    const doctorID = req.params.id

    Doctor.findByIdAndDelete(doctorID)
    .then(() => res.status(200).json({message: `Succesfully deleted ${doctorID}`}))
    .catch((err) => res.status(500).json({error: err.message || "Error in deleting doctor"})) 
}

