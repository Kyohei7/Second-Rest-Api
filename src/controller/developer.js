const {
    getDataDeveloperModel,
    createDeveloperModel,
    putDeveloperModel,
    deleteDeveloperModel,
    getDataDeveloperByIDModel
  } = require('../models/developer')
  
  module.exports = {
    
    getDataDeveloperByID: async (req, res) => {
      const {
        id
      } = req.params
      try {
        const result = await getDataDeveloperByIDModel(id)
        if (result.length) {
          res.send({
            success: true,
            message: `Data Developer id ${id}`,
            data: result[0]
          })
      }
    }
      catch (error) {
        res.send({
          success: false,
          message: `Data Developer ${id} not found`
        })
      }
    },
    
    createDeveloper: async (req, res) => {
      
       const{ name_developer, 
             photo, 
             job, 
             location, 
             status,
             description, 
             skill, 
             email,
             instagram,
             github,
             gitlab,
             createAt,
             updateAt } = req.body
      
      const setData = { 
             name_developer, 
             photo : req.file === undefined ? '' : req.file.filename, 
             job, 
             location, 
             status, 
             description, 
             skill,
             email,
             instagram,
             github,
             gitlab,
             createAt: new Date(),
             updateAt: new Date()
      }
      
      try {
        const result = await createDeveloperModel(setData)
        res.status(201).send({
          success: true,
          message: 'Developer data has been created',
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
    
    putDeveloper: async (req, res) => {
      const id = req.params.id
      const{ 
        name_developer, 
        photo, 
        job, 
        location, 
        status,
        description, 
        skill, 
        email,
        instagram,
        github,
        gitlab,
        createAt,
        updateAt } = req.body
      
        const setData = { 
            name_developer, 
            photo : req.file === undefined ? '' : req.file.filename, 
            job, 
            location, 
            status, 
            description, 
            skill,
            email,
            instagram,
            github,
            gitlab,
            createAt,
            updateAt }
      try {
        const result = await putDeveloperModel(setData, id)
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
    
    deleteDeveloper: async (req, res) => {
      const id = req.params.id
      try {
        const result = await deleteDeveloperModel(id)
        if (result.affectedRows) {
          res.send({
            success: true,
            message: `Item company id ${id} has been deleted`
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
    
    getDataDeveloper: async (req, res) => {
      let {
        page,
        limit,
        search,
        order
      } = req.query
      let searchKey = ''
      let searchValue = ''
      let orderKey = ''
  
      if (typeof order==='object') {
        orderKey = Object.keys(order)[0]
      } else {
        orderKey = 'name_developer'
      }
  
      if (typeof search==='object') {
        searchKey = Object.keys(search)[0]
        searchValue = Object.values(search)[0]
      } else {
        searchKey = 'name_developer'
        searchValue = search || ''
      }
  
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
        const result = await getDataDeveloperModel()
        // const count = result[0].count
        if (result.length) {
          console.log(result);
          res.send({
            success: true,
            message: 'List Developer',
            data: result
          })
        }
      } catch (error) {
        console.log(error);
        res.send({
          success: true,
          message: 'There is no item on list'
        })
      }
    }
  }