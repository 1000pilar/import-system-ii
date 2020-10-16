const express = require('express')
const router = express.Router()
const PibDtlSpekKhususController = require('../../controllers/Pibs/PibDtlSpekKhusus-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/dtlspekkhusus/insert', helper.jwtVerifyImport, PibDtlSpekKhususController.create)
router.get('/dtlspekkhusus/getall', helper.jwtVerifyImport, PibDtlSpekKhususController.getAll)
router.get('/dtlspekkhusus/getonecar/:CAR', helper.jwtVerifyImport, PibDtlSpekKhususController.getOneCAR)
router.delete('/dtlspekkhusus/deleteall', helper.jwtVerifyImport, PibDtlSpekKhususController.deleteAll)

module.exports = router