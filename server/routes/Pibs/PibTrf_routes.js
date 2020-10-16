const express = require('express')
const router = express.Router()
const PibTrfController = require('../../controllers/Pibs/PibTrf-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/trf/insert', helper.jwtVerifyImport, PibTrfController.create)
router.get('/trf/getall', helper.jwtVerifyImport, PibTrfController.getAll)
router.delete('/trf/delete', helper.jwtVerifyImport, PibTrfController.deleteAll)


module.exports = router