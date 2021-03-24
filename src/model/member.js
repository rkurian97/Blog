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
    title: {
        type: String,
        default: 'Default Title'
  
      },
    content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
})

const members = mongoose.model('members', memberSchema);
module.exports= members