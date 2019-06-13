var mongoose = require('mongoose');

//Below is example create a schema
var PokeSchema = new mongoose.Schema({
    name: { type: String, required: 'Your name must be longer than 2 characters', trim: true, minlength: 2},
},{ timestamps: true })

mongoose.model('Pokemon', PokeSchema); // 'DATANAME' , matching DATANAME you set in controllers.js

