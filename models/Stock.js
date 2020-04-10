const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
   
  
 }, { timestamps: true }

);



module.exports = model('Stock', stockSchema);