console.log('test')
console.log('test2')
const express= require('express'),
    bodyParser = require('body-parser'),
    methodOverride= require('method-override'),
    memberRouter = require('./routers/memberRoute'),
    cors = require('cors')

    require('./mongooseConnection')

const app= express()
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(methodOverride('_method'))
app.use(express.json())
app.use(memberRouter)

app.listen(3000, () => {
    console.log("Projects are being managed on port 3000")
    console.log("http://localhost:3000")
  })