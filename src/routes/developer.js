const { Router } = require('express')
const {
    getDataDeveloperByID,
    createDeveloper,
    putDeveloper,
    deleteDeveloper,
    getDataDeveloper
} = require('../controller/developer')
const router = Router()
const { authorizationDev } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/:id', getDataDeveloperByID)
router.post('/', authorizationDev, uploadImage, createDeveloper)
router.put('/:id',authorizationDev, uploadImage, putDeveloper)
router.delete('/:id', authorizationDev, deleteDeveloper)
router.get('/' ,getDataDeveloper)

module.exports = router
