const express = require('express')
const router = express.Router()
const PibDtlVdController = require('../../controllers/Pibs/PibDtlVd-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/dtlvd/insert', helper.jwtVerifyImport, PibDtlVdController.create)
router.get('/dtlvd/getall', helper.jwtVerifyImport, PibDtlVdController.getAll)
router.get('/dtlvd/getonecar/:CAR', helper.jwtVerifyImport, PibDtlVdController.getOneCAR)
router.delete('/dtlvd/deleteall', helper.jwtVerifyImport, PibDtlVdController.deleteAll)

module.exports = router