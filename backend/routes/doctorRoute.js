const express = require('express')

const router = express.Router()

const doctorController = require('../controllers/doctorController')


router.get("/", doctorController.doctors)

router.post("/create", doctorController.createDoctor)

router.get("/:id", doctorController.doctor)

router.put("/update/:id", doctorController.updateDoctor)

router.delete("/delete/:id", doctorController.deleteDoctor)


module.exports = router