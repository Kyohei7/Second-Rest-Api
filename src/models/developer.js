const db = require('../helpers/db')

module.exports = {
  getDataDeveloperByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT developer.id_developer, 
                       developer.name_developer,
                       developer.photo,
                       developer.job,
                       developer.location,
                       developer.status,
                       developer.description,
                       developer.skill,
                       user.email,
                       user.id_user,
                       developer.instagram,
                       developer.github,
                       developer.gitlab FROM developer JOIN user ON user.id_user = developer.id_user WHERE user.id_user = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },

  getDataDeveloperByIDDevModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT developer.id_developer, 
                       developer.name_developer,
                       developer.photo,
                       developer.job,
                       developer.location,
                       developer.status,
                       developer.description,
                       developer.skill,
                       user.email,
                       user.id_user,
                       developer.instagram,
                       developer.github,
                       developer.gitlab FROM developer JOIN user ON user.id_user = developer.id_user WHERE developer.id_developer = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  createDeveloperModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO developer SET ?', body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          const newResult = {
            id: result.insertId,
            ...body
          }
          resolve(newResult)
        }
      })
    })
  },
  
  putDeveloperModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE developer SET ? WHERE id_developer='${id}'`, body, (err, result, _field) => {
        console.log(err);
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  deleteDeveloperModel: (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM developer WHERE id_developer = '${id}'`, (err, result, _field) => {
        if (err) {
          console.log(err);
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  getDataDeveloperModel: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM developer`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}