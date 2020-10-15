const db = require('../helpers/db')

module.exports = {
  getDataDeveloperByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM developer WHERE developer.id_developer = ${id}`, (err, result, _field) => {
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