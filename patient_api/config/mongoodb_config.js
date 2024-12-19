const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patient',{});

const doctorschema = {    
    doctor_id:String,   
    doctor_name:String,
    doctor_specialities:String,
    doctor_mobileno:String,
    doctor_email:String,
    doctor_password:String,
    type:String
}

const DoctorModel = mongoose.model("doctor",doctorschema)
module.exports = DoctorModel;