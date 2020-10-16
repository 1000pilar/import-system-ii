const express = require('express')
const router = express.Router()
const pibConRController = require('../../controllers/Pibs/PibConR-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/conr/insert', helper.jwtVerifyImport, pibConRController.create)
router.get('/conr/getall', helper.jwtVerifyImport, pibConRController.getAll)
router.get('/conr/getonecar/:CAR', helper.jwtVerifyImport, pibConRController.getOneCAR)
router.delete('/conr/deleteall', helper.jwtVerifyImport, pibConRController.deleteAll)

module.exports = router