const express = require('express')
const router = express.Router()
const PibResNPBLController = require('../../controllers/Pibs/PibResNPBL-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/resnpbl/insert', helper.jwtVerifyImport, PibResNPBLController.create)
router.get('/resnpbl/getall', helper.jwtVerifyImport, PibResNPBLController.getAll)
router.get('/resnpbl/getonecar/:CAR', helper.jwtVerifyImport, PibResNPBLController.getOneCAR)
router.delete('/resnpbl/deleteall', helper.jwtVerifyImport, PibResNPBLController.deleteAll)

module.exports = router
