let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({

    Title: {
          type: String,
          require: true
    },
    Description: {
          type:String,
          require: true,
    },
    Price: {
          type:Number,
          require: true,
    },
    Author: {
          type:String,
          require: true,
    },
    Genre: {
          type:String, 
          require: true
    }
},
{
  collection: "books"
});

module.exports = mongoose.model('books', Book);
