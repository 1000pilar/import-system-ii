const express = require('express')
const router = express.Router()
const PibFasController = require('../../controllers/Pibs/PibFas-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/fas/insert', helper.jwtVerifyImport, PibFasController.create)
router.get('/fas/getall', helper.jwtVerifyImport, PibFasController.getAll)
router.get('/fas/getonecar/:CAR', helper.jwtVerifyImport, PibFasController.getOneCAR)
router.delete('/fas/deleteall', helper.jwtVerifyImport, PibFasController.deleteAll)

module.exports = router