const db = require('../helpers/db')
module.exports = {
  getDataProjectByIDModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM project WHERE id_project = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  getProjectbyIDCompanyModel:(id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT  project.name_project, 
                          project.description, 
                          project.deadline, 
                          project.photo, 
                          company.name_company, 
                          project.createAt, 
                          project.updateAt, 
                          project.id_project, 
                          company.id_company, (SELECT COUNT(*) FROM project) as count FROM project JOIN company ON project.id_company = company.id_company WHERE project.id_company = ${id}`, (err, result, _field) =>{
        if (err) {
        reject(new Error(err))
        } else {
        console.log(result);
        resolve(result)
        }
    })
})
},
  
  createProjectModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO project SET ?', body, (err, result, _field) => {
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
  
  putProjectModel: (body, id) => {
    return new Promise((resolve, reject) => {
      console.log(body);
      db.query(`UPDATE project SET ? WHERE id_project='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  deleteProjectModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM project WHERE id_project = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  getDataProjectModel: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT project.id_project,
                       project.name_project, 
                       project.description, 
                       project.deadline, 
                       project.photo, 
                       company.name_company,
                       project.createAt, 
                       project.updateAt,  
                       (SELECT COUNT(*) FROM project) as count FROM project 
                       JOIN company ON project.id_company = company.id_company 
                       LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        console.log(result);
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}