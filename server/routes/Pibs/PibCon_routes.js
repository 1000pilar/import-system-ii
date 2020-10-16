const express = require('express')
const router = express.Router()
const pibConController = require('../../controllers/Pibs/PibCon-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/con/insert', helper.jwtVerifyImport, pibConController.create)
router.get('/con/getall', helper.jwtVerifyImport, pibConController.getAll)
router.get('/con/getonecar/:CAR', helper.jwtVerifyImport, pibConController.getOneCAR)
router.delete('/con/deleteall', helper.jwtVerifyImport, pibConController.deleteAll)

module.exports = router