const express = require("express")
const sqlite3 = require("sqlite3")
const ejs = require("ejs")
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/assets/", express.static(__dirname + "/assets"))

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/login', (req, res) => {
  res.render("login")
})

app.get('/signup', (req, res) => {
  res.render("signup")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

