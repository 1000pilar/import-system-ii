const express = require('express')
const router = express.Router()
const PibKendaraanController = require('../../controllers/Pibs/PibKendaraan-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/kendaraan/insert', helper.jwtVerifyImport, PibKendaraanController.create)
router.get('/kendaraan/getall', helper.jwtVerifyImport, PibKendaraanController.getAll)
router.get('/kendaraan/getonecar/:CAR', helper.jwtVerifyImport, PibKendaraanController.getOneCAR)
router.delete('/kendaraan/deleteall', helper.jwtVerifyImport, PibKendaraanController.deleteAll)

module.exports = router