const express = require('express')
const session = require('express-session')
const app = express()
const router = require('./router')
const port = 3000

app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

app.use(router)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
