const db = require('../helpers/db')
module.exports = {
  getDataCompanyByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT company.id_company, 
                       company.name_company,
                       company.sector, 
                       company.city, 
                       company.description,
                       company.instagram,
                       company.linkedin,
                       company.photo,
                       company.createAt,
                       company.updateAt FROM company
                       WHERE id_company = ${id}`, (err, result, _field) => {
        if (err) {
          console.log(err);
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  createCompanyModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO company SET ?', body, (err, result, _field) => {
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
  
  putCompanyModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE company SET ? WHERE id_company='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  deleteCompanyModel: (id) => {
    return new Promise ((resolve, reject)=> {
        db.query(`DELETE FROM company WHERE id_company = '${id}'`, (err, result, _field) => {
        if (err) {
        reject(new Error(err))
        } else {
        resolve(result)
        }
        })
    })
},

  getDataCompanyModel: (limit, offset) => {
  return new Promise ((resolve, reject) => {
    db.query(`SELECT company.id_company, 
    company.name_company,
    company.sector, 
    company.city, 
    company.description,
    company.instagram,
    company.linkedin,
    company.photo,
    company.createAt,
    company.updateAt FROM company LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(result)
      }
    })
  })
}
}