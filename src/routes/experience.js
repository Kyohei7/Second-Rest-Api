const { Router } = require('express')
const {
  getDataExperienceByID,
  createExperience,
  putExperience,
  deleteExperience,
  getDataExperience
} = require('../controller/experience')
const router = Router()
const { authorizationDev} = require('../middleware/auth')

router.get('/:id', getDataExperienceByID)
router.post('/',authorizationDev, createExperience)
router.put('/:id',authorizationDev, putExperience)
router.delete('/:id',authorizationDev, deleteExperience)
router.get('/', getDataExperience)

module.exports = router