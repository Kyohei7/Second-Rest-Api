const { Router } = require('express')
const {
  getDataHireByID,
  createHire,
  putHire,
  deleteHire,
  getDataHire,
  getDataHireByIdDeveloper,
  patchHire
} = require('../controller/hire')
const router = Router()
const { authorizationcomp } = require('../middleware/auth')

router.get('/:id', getDataHireByID)
router.post('/',authorizationcomp, createHire)
router.put('/:id', putHire)
router.delete('/:id', deleteHire)
router.get('/', getDataHire)
router.get('/hireId/:id', getDataHireByIdDeveloper)
router.patch('/:id', patchHire)

module.exports = router
