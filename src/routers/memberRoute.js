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

router.post('/articles', async (req, res)=> {
  const newUser= new memberSchema(req.body)
  newUser.save().then(() => {
    res.render('', )
  }).catch((error) => {
    console.log(error)
    res.status(400).send(error)
  })
})
module.exports = router