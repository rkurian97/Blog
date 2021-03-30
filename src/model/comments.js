const mongoose= require('mongoose'),
    validator= require('validator'),
    ObjectId = mongoose.Types.ObjectId;

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        trim: true
    },
    creator: {
        type: ObjectId,
        ref: 'members'
    },
    article: {
        type: ObjectId,
        ref: 'articles'
    }
  });

  
const comments = mongoose.model('comment', commentSchema);
module.exports= comments;