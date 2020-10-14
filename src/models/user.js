const db = require('../helpers/db')


module.exports = {
  postUserModel: (setData) => {
    return new Promise ((resolve, reject) => {
      db.query('INSERT INTO user SET ?', setData, (error, result)=>{
        if(error) {
          reject(new Error(error))
        } else {
          const newResult = {
            id: result.insertId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        }
      })
    })
  },
  
  checkUserModel: (email) => {
    return new Promise ((resolve, reject)=>{
        // console.log(email);
      db.query('SELECT id_user, user_name, email, password, role FROM user WHERE email = ?', email, (error, result) =>{
        // console.log(error);
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}