const {postUserModel, checkUserModel} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports={
  registerUser: async (req, res) => {
    const {user_name, email, password, role} = req.body
    const salt = bcrypt.genSaltSync(10)
    const encryptPass = bcrypt.hashSync(password, salt)
    const setData = {
      user_name,
      email,
      password: encryptPass,
      role,
      createAt: new Date()
    }
    console.log(setData) 
    try{
      const emailUnique = await checkUserModel(email)
      if (emailUnique.length >=1) {
        res.send({
          success: false,
          message: 'Email has been registered!'
        })
      } else {
        const result = await postUserModel(setData)
     
      res.send({
        success: true,
        message: 'Success Register Account!',
        data: result
      })
      }
      
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: 'Bad request'
      })
    }
  },
  
  loginUser: async(req, res) => {
    try {
      const {email, password} = req.body
      const checkDataUser = await checkUserModel(email)
      if (checkDataUser.length >=1) {
        const checkPass = bcrypt.compareSync(password, checkDataUser[0].password)
        console.log(checkPass);
        if (checkPass) {
          const {id_user, user_name, email, role} = checkDataUser[0]
          let payload = {
            id_user,
            user_name,
            email,
            role
          }
          console.log(payload);
          const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '2h'})
          payload = { ...payload, token}
          res.send({
            success: true,
            message: 'Success Login!',
            data: payload
          })
        } else {
          res.status(400).send({
            success: false,
            message: 'Wrong Password'
          })
        }
      } else {
        res.status(400).send({
          success: false,
          message: 'Email/Account was not registered!'
        })
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        message: 'Bad Request'
      })
    }
  }
}