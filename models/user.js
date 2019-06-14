var mongoose = require('mongoose'); 

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        trim: true,
        minlength: 1 
    }
}); 

var User = mongoose.model('User', UserSchema); 

module.exports = {User}; 