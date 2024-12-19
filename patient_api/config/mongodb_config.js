const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patient',{});

const patientschema = {
    id:String,
    name:String,
    phoneno:String,
    age:String,
    gender:String,
    disease:String,
    treatment:String,

}

const patientModel = mongoose.model("patient",patientschema)
module.exports = patientModel;