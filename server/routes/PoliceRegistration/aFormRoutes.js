const express = require('express')
const router = express.Router()
const policeRegistrationController = require('../../controllers/PoliceRegistrations/PoliceRegistration-cont')


router.post('/aform/insert',  policeRegistrationController.insert)
router.get('/aform/getall',  policeRegistrationController.getAll)
router.delete('/aform/deleteall',  policeRegistrationController.deleteAll)


module.exports = router