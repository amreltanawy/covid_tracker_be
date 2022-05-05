var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TempratureData = new Schema({
    name: String,
    country: String,
    temprature: Number,
    dateOfBirth: Date,
    weight: Number,
    gender: String,
    coordinates:{
        lon:Number,
        lat:Number
    }
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('TempratureData', TempratureData );