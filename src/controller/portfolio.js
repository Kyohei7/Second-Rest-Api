const {
    getDataPortfolioModel,
    createPortfolioModel,
    putPortfolioModel,
    deletePortfolioModel,
    getDataPortfolioByIDModel
  } = require('../models/portfolio')
  
  module.exports = {
    getDataPortfolioByID:async (req, res) => {
      const {
        id
      } = req.params
      try {
        const result = await getDataPortfolioByIDModel(id)
        if (result.length) {
          res.send({
            success: true,
            message: `Data Portfolio id ${id}`,
            data: result
          })
        }
      } catch (error) {
        res.send({
          success: false,
          message: `Data Portfolio ${id} not found`
        })
  
      }
    },
    createPortfolio: async (req, res) => {
      const {id_developer, name, description, link, repository, company, type} = req.body
      const setData = {
        id_developer, 
        name, 
        description, 
        photo:req.file === undefined ? '' : req.file.filename, 
        link,
        repository,
        company,
        type
      }
      try {
        const result = await createPortfolioModel(setData)
        res.status(201).send({
          success: true,
          message: 'Portfolio data has been created',
          data: result
        })
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: 'All field must be filled!'
        })
      }
    },
    
    putPortfolio: async (req, res) => {
      const id = req.params.id
      const {id_developer, name, description, link, repository, company, type} = req.body
      const setData = {
        id_developer, 
        name, 
        description, 
        photo:req.file === undefined ? '' : req.file.filename, 
        link,
        repository,
        company,
        type
      }
      try {
        const result = await putPortfolioModel(setData, id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Project with id ${id} has been updated`
          })
        } else {
          res.send({
            success: false,
            message: 'Failed to update data!'
          })
        }
      } catch (error) {
        res.send({
          success: false,
          message: 'All field must be filled!'
        })
      }
    },
    
    deletePortfolio:  async (req, res) => {
      const id = req.params.id
      try {
        const result = await deletePortfolioModel(id)
          if (result.affectedRows) {
            res.send({
              success: true,
              message: `Item Portfolio id ${id} has been deleted`
            })
        } else {
          res.send({
                message: 'Data not found!'
              })
        }
      } catch (error) {
        res.send({
          success: false,
          message: 'bad request!'
        })
      }
    },
    
    getDataPortfolio: async (req, res) => {
      let {
        page,
        limit
      } = req.query
      if (!limit) {
        limit = 30
      } else {
        limit = parseInt(limit)
      }
  
      if (!page) {
        page = 1
      } else {
        page = parseInt(page)
      }
  
      const offset = (page - 1) * limit
      try {
        const result = await getDataPortfolioModel(limit, offset)
        if (result.length) {
          res.send({
            success: true,
            message: 'List company',
            data: result
          })
        }
      } catch (error) {
        res.send({
          success: true,
          message: 'There is no item on list'
        })
      }
    }
  }