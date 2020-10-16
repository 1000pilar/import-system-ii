const express = require('express')
const router = express.Router()
const PibKmsController = require('../../controllers/Pibs/PibKms-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/kms/insert', helper.jwtVerifyImport, PibKmsController.create)
router.get('/kms/getall', helper.jwtVerifyImport, PibKmsController.getAll)
router.get('/kms/getonecar/:CAR', helper.jwtVerifyImport, PibKmsController.getOneCAR)
router.delete('/kms/deleteall', helper.jwtVerifyImport, PibKmsController.deleteAll)

module.exports = router