const express = require('express')
const router = express.Router()
const PibResNPDController = require('../../controllers/Pibs/PibResNPD-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/resnpd/insert', helper.jwtVerifyImport, PibResNPDController.create)
router.get('/resnpd/getall', helper.jwtVerifyImport, PibResNPDController.getAll)
router.get('/resnpd/getonecar/:CAR', helper.jwtVerifyImport, PibResNPDController.getOneCAR)
router.delete('/resnpd/deleteall', helper.jwtVerifyImport, PibResNPDController.deleteAll)

module.exports = router