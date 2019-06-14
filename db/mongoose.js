const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost:27017/todoAppDB", {useNewUrlParser: true}); 

module.exports = {mongoose}; 