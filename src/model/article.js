const mongoose= require('mongoose'),
    validator= require('validator')

const articleSchema = mongoose.Schema({
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'members'
    },
    content: String,
  });

  
const articles = mongoose.model('articles', articleSchema);
module.exports= articles;