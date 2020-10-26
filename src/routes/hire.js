const { Router } = require('express')
const {
  getDataHireByID,
  createHire,
  putHire,
  deleteHire,
  getDataHire
} = require('../controller/hire')
const router = Router()
const { authorizationcomp } = require('../middleware/auth')

router.get('/:id', getDataHireByID)
router.post('/',authorizationcomp, createHire)
router.put('/:id', putHire)
router.delete('/:id', deleteHire)
router.get('/', getDataHire)

module.exports = router
