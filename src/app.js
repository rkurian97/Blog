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

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const articleSchema= require('./model/article');
const commentSchema= require('./model/comments');

// commentSchema.create({
//     content: "Article Rocks",
//     creator: new ObjectId("60626877b5b04956346e14cb"),
//     article: new ObjectId("6062681a03123a665c58fecc")
// })


// articleSchema.create({
//     title: "Second Article",
//     author: new ObjectId("60626877b5b04956346e14cb")

// })



app.listen(3000, () => {
    console.log("Projects are being managed on port 3000")
    console.log("http://localhost:3000")
  })