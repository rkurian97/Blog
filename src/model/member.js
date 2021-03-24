const mongoose= require('mongoose'),
    validator= require('validator')

const memberSchema = mongoose.Schema({
    firstName:{
        type:String, 
        require: true,
        trim: true
    },
    lastName:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        unique: true, 
        index: true,
        require: true,
        trim: true,
        lowercase: true,
        validator(value){
            if (!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    password:{
        type: String,
        require: true,
        trim: true,
        minLength: 4
      
    },
    articles: [
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'articles'
        }  
      ]
})

const members = mongoose.model('members', memberSchema);
module.exports= members