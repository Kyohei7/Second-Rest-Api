const db = require('../helpers/db')
module.exports = {
  
  getDataHireByIDModel: (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT hire.id_hire,
                         hire.description,
                         hire.price,
                         hire.status,
                         project.photo,
                         company.name_company,
                         project.name_project FROM hire JOIN project ON hire.id_project = project.id_project JOIN company ON project.id_company = company.id_company WHERE hire.id_hire = ${id}`, (err, result, _field) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve(result)
          }
        })
      })
    },

    getDataHireByIdDeveloperModel: (id) => {
      return new Promise((resolve, reject) => {
        db.query(`SELECT hire.id_hire,
                         hire.description,
                         hire.price,
                         hire.status,
                         company.name_company,
                         project.photo,
                         project.name_project FROM hire JOIN project ON hire.id_project = project.id_project JOIN company ON project.id_company = company.id_company WHERE hire.id_developer = ${id}`, (err, result, _field) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve(result)
          }
        })
      })
    },
  
  createHireModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO hire SET ?', body, (err, result, _field) => {
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
  
  putHireModel: (body, id) => {
    return new Promise ((resolve, reject) => {
      db.query(`UPDATE hire SET ? WHERE id_hire='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  deleteHireModel: (id) => {
    return new Promise ((resolve, reject)=> {
      db.query(`DELETE FROM hire WHERE id_hire = '${id}'`, (err, result, _field)=>{
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  getDataHireModel: (limit, offset) => {
    return new Promise ((resolve, reject)=>{
      db.query(`SELECT hire.id_hire, 
                       project.name_project, 
                       developer.name_developer, 
                       hire.description, 
                       hire.price, 
                       hire.status, 
                       hire.createAt, 
                       hire.updateAt, 
                (SELECT COUNT(*) FROM hire) as count FROM hire 
                JOIN project ON hire.id_project=project.id_project 
                JOIN developer ON hire.id_developer=developer.id_developer 
                LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          console.log(err);
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}