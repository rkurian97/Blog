const express = require('express'),
memberSchema= require('../model/member')
router = new express.Router()

router.get('/', (req,res) => {
  res.render('blog/blog')
})

router.get('/login', (req,res) => {
  res.render('blog/login')
})

router.get('/register', (req,res) => {
  res.render('blog/register')
})

router.get('/article', (req,res) => {
  res.render('blog/article')
})

router.post('/register', async (req, res)=> {
  console.log(req.body)
  const newUser= new memberSchema(req.body)
  console.log(newUser)
  newUser.save().then(() => {
    res.render('blog/register-confirm')
  }).catch((error) => {
    console.log(error)
    res.status(400).send(error)
  })
})

router.get("/login-button", async(req, res) => {
  try{
    const staffMember = await memberSchema.find(req.query)
    console.log(staffMember)
    res.render('blog/login-confirm')
  }catch(error){
    console.log(error)
    res.status(500).send(error)
  }
})

router.get('/article-edit', (req,res) => {
  res.render('blog/article-edit')
})

module.exports = router