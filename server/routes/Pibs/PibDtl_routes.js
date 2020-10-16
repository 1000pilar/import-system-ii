const express = require('express')
const router = express.Router()
const pibDtlController = require('../../controllers/Pibs/PibDtl-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/dtl/insert', helper.jwtVerifyImport, pibDtlController.create)
router.get('/dtl/getall', helper.jwtVerifyImport, pibDtlController.getAll)
router.get('/dtl/getonecar/:CAR', helper.jwtVerifyImport, pibDtlController.getOneCAR)
// router.put('/dtl/updateaform/:CombineKey', helper.jwtVerifyImport, pibDtlController.updateAForm_id)
router.delete('/dtl/deleteall', helper.jwtVerifyImport, pibDtlController.deleteAll)
router.delete('/dtl/deleteone/:CAR', helper.jwtVerifyImport, pibDtlController.deleteOne)

module.exports = router