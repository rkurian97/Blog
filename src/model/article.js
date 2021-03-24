const mongoose= require('mongoose'),
    validator= require('validator')

const articleSchema = mongoose.Schema({
    title: {
      type: String,
      default: 'Default Title'

    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'members'
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    
  });

  
const articles = mongoose.model('articles', articleSchema);
module.exports= articles;