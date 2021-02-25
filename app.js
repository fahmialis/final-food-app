const express = require('express')
const session = require('express-session')
const app = express()
const router = require('./router')
const PORT = process.env.PORT || 3000

app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))

app.use(router)

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
