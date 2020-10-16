const express = require('express')
const router = express.Router()
const PibDtlDokController = require('../../controllers/Pibs/PibDtlDok-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/dtldoc/insert', helper.jwtVerifyImport, PibDtlDokController.create)
router.get('/dtldoc/getall', helper.jwtVerifyImport, PibDtlDokController.getAll)
router.get('/dtldoc/getonecar/:CAR', helper.jwtVerifyImport, PibDtlDokController.getOneCAR)
router.delete('/dtldoc/deleteall', helper.jwtVerifyImport, PibDtlDokController.deleteAll)

module.exports = router