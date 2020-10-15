const db = require('../helpers/db')
module.exports = {
  getDataPortfolioByIDModel: (id, cb) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM portfolio WHERE id_developer = ${id}`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  createPortfolioModel: (body) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO portfolio SET ?', body, (err, result, _field) => {
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
  
  putPortfolioModel: (body, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE portfolio SET ? WHERE id_portfolio='${id}'`, body, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  deletePortfolioModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM portfolio WHERE id_portfolio = '${id}'`, (err, result, _field) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  },
  
  getDataPortfolioModel: (limit, offset, cb) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT portfolio.id_portfolio, 
                       developer.name_developer, 
                       portfolio.name,
                       portfolio.description, 
                       portfolio.link,
                       portfolio.repository,
                       portfolio.company,
                       portfolio.type, 
                       portfolio.photo,
                (SELECT COUNT(*) FROM portfolio) as count FROM portfolio 
                JOIN developer ON portfolio.id_developer = developer.id_developer 
                LIMIT ${limit} OFFSET ${offset}`, (err, result, _fields) => {
        if (err) {
          reject(new Error(err))
        } else {
          resolve(result)
        }
      })
    })
  }
}