const express = require('express')
const router = express.Router()
const PibResBillController = require('../../controllers/Pibs/PibResBill-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/resbill/insert', helper.jwtVerifyImport, PibResBillController.create)
router.get('/resbill/getall', helper.jwtVerifyImport, PibResBillController.getAll)
router.get('/resbill/getonecar/:CAR', helper.jwtVerifyImport, PibResBillController.getOneCAR)
router.delete('/resbill/deleteall', helper.jwtVerifyImport, PibResBillController.deleteAll)

module.exports = router