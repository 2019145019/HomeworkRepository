const express = require("express")
const sqlite3 = require("sqlite3")
const ejs = require("ejs")
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require("./database.js")

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/assets/", express.static(__dirname + "/assets"))

app.get('/', (req, res) => {
  db.getAllProducts().then(products => {
    res.render("index", {products})
  })
})

app.get('/login', (req, res) => {
  res.render("login")
})

app.get('/signup', (req, res) => {
  res.render("signup")
})

app.get("/products/:id", (req, res) => {
  const id = req.params.id
  db.getProductById(id).then(product => {
    db.getProductComments(id).then(comments => {
      res.render("product", {product, comments})
    })
  })
})

app.post("/products/:id/comments", (req, res) => {
  const productId = req.params.id;
  const comment = req.body['comment'];

  db.addCommentToProduct(productId, comment).then(() => {
    res.redirect("/products/"+productId)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

