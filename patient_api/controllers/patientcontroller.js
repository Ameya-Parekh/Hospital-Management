const patient = require('../config/mongodb_config')
exports.patientlist=(request,reponse)=>{
    reponse.send("Patient Data Saved!!")
}
exports.prescription = (request,response)=>{
  
    const prescriptiondata = {name:request.body.name,phoneno:request.body.phoneno,age:request.body.age,
        gender:request.body.gender,disease:request.body.disease,treatment:request.body.treatment
    }
    const Patient = new patient(prescriptiondata);
    Patient.save();
    response.send("The patient data saved!!")
}

exports.patientlist = async (req, res) => {
        const patients = await Doctor.countDocuments({ type: 'P' });
        res.send(JSON.stringify({ "status": 200, "error": null, "message": { type_P: patients } }));
    };