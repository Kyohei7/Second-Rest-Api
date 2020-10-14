const { Router } = require('express')
const {
  getDataPortfolioByID,
  createPortfolio,
  putPortfolio,
  deletePortfolio,
  getDataPortfolio
} = require('../controller/portfolio')
const router = Router()
const { authorizationDev} = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

router.get('/:id', getDataPortfolioByID)
router.post('/',authorizationDev, uploadImage, createPortfolio)
router.put('/:id',authorizationDev, uploadImage, putPortfolio)
router.delete('/:id',authorizationDev, deletePortfolio)
router.get('/', getDataPortfolio)

module.exports = router