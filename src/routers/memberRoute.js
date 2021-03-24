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

module.exports = router