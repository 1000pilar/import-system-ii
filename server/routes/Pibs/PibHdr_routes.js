const express = require('express')
const router = express.Router()
const pibHdrController = require('../../controllers/Pibs/PibHdr-cont')
const helper = require('../../helpers/jwtVerify')


router.post('/hdr/insert', helper.jwtVerifyImport, pibHdrController.create)
router.get('/hdr/getall', helper.jwtVerifyImport, pibHdrController.getAll)
router.delete('/hdr/deleteall', helper.jwtVerifyImport, pibHdrController.deleteAll)

module.exports = router