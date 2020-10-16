const express = require('express')
const router = express.Router()
const PibResController = require('../../controllers/Pibs/PibRes-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/res/insert', helper.jwtVerifyImport, PibResController.create)
router.get('/res/getall', helper.jwtVerifyImport, PibResController.getAll)
router.get('/res/getonecar/:CAR', helper.jwtVerifyImport, PibResController.getOneCAR)
router.delete('/res/deleteall', helper.jwtVerifyImport, PibResController.deleteAll)


module.exports = router