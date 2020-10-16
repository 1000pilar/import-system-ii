const express = require('express')
const router = express.Router()
const pibDokController = require('../../controllers/Pibs/PibDok-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/doc/insert', helper.jwtVerifyImport, pibDokController.create)
router.get('/doc/getall', helper.jwtVerifyImport, pibDokController.getAll)
router.get('/doc/getonecar/:CAR', helper.jwtVerifyImport, pibDokController.getOneCAR)
router.delete('/doc/deleteall', helper.jwtVerifyImport, pibDokController.deleteAll)

module.exports = router