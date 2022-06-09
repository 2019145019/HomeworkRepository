const sqlite = require('sqlite3').verbose()
const fs =require('fs')
const db = new sqlite.Database("product2.db")

const getAllProducts = () => new Promise((res, rej) => {
  db.serialize(() => {
    db.all("select * from product", (err, rows) => {
      if (err) {
        rej(err)
      } else {
        res(rows)
      }
    })
  })
})

const getProductById = (id) => new Promise((res, rej) => {
  db.serialize(() => {
    db.each(`select * from product where product_id = ${id}`, (err, row) => {
      if (err) {
        rej(err)
      } else {
        res(row)
      }
    })
  })
})

const getProductComments = (id) => new Promise((res, rej) => {
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      rej(err)
    } else {
      data = JSON.parse(data)
      res(data[id] ? data[id] : [])
    }
  })
})

const addCommentToProduct = (productId, comment) => new Promise((res, rej)=> {
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      rej(err)
    } else {
      data = JSON.parse(data)
      if (data[productId] && data[productId].length) {
        data[productId].push(comment)
      } else {
        data[productId] = [comment]
      }

      const newData = JSON.stringify(data)
      fs.writeFile("comments.json", newData, (err) => {
        if (err) {
          rej(err)
        } else {
          res()
        }
      })
    }
  })
})



module.exports = {
  getAllProducts,
  getProductById,
  getProductComments,
  addCommentToProduct
}
