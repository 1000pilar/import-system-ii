const express = require('express')
const router = express.Router()
const PibNptController = require('../../controllers/Pibs/PibNpt-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/npt/insert', helper.jwtVerifyImport, PibNptController.create)
router.get('/npt/getall', helper.jwtVerifyImport, PibNptController.getAll)
router.get('/npt/getonecar/:CAR', helper.jwtVerifyImport, PibNptController.getOneCAR)
router.delete('/npt/deleteall', helper.jwtVerifyImport, PibNptController.deleteAll)

module.exports = router