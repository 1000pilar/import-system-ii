const express = require('express')
const router = express.Router()
const PibPgtController = require('../../controllers/Pibs/PibPgt-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/pgt/insert', helper.jwtVerifyImport, PibPgtController.create)
router.get('/pgt/getall', helper.jwtVerifyImport, PibPgtController.getAll)
router.get('/pgt/getonecar/:CAR', helper.jwtVerifyImport, PibPgtController.getOneCAR)
router.delete('/pgt/deleteall', helper.jwtVerifyImport, PibPgtController.deleteAll)

module.exports = router