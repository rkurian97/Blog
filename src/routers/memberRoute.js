const express = require('express'),
memberSchema= require('../model/member'),
articleSchema= require('../model/article'),
commentSchema= require('../model/comments')
router = new express.Router()
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


router.get('/', (req,res) => {
  res.render('blog/login')
})

router.get('/register', (req,res) => {
  res.render('blog/register')
})

router.get('/blog/:id', async (req,res) => {
  
  // articleSchema.findById({_id: new ObjectId(req.params.id)}).then(function(staffMember) {
  //   console.log('Stafffff', staffMember)
  //   res.render('blog/blog',  {data: staffMember})
  // })
  console.log('params', req.params)
  const articles= await articleSchema.find({})
  res.render('blog/blog', {data: articles, members: req.params.id})

})

router.get('/article/:id', async (req,res) => {
  console.log('params', req.params)
  const staffMember= await memberSchema.findById({_id: new ObjectId(req.params.id)})
  console.log(req.params)
  res.render('blog/article',  {data: staffMember})
})

router.post('/register', async (req, res)=> {
  const newUser= new memberSchema(req.body)

  newUser.save().then(() => {
    res.redirect('/login')
  }).catch((error) => {
    console.log(error)
    res.status(400).send(error)
  })
})

router.get("/login-button", async(req, res) => {
  try{
    const staffMember = await memberSchema.find(req.query)
    res.redirect("/article/"+staffMember[0]._id)
  }catch(error){
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/article-edit', (req,res) => {
  res.render('blog/article-edit')
})

module.exports = router