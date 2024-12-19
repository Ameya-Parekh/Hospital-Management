const doctor = require('../config/mongoodb_config')
exports.doctorlist=(request,response)=>{

    response.send('Doctors list!!')

}

exports.singleuserlist = async(request,response)=>{
    const allusers = await doctor.findById(request.params.id);
    response.send(JSON.stringify({"status":200,'error':'','message':allusers}))
}


exports.userlist = async (request, response) => {
    const doctors = await doctor.find(); 
    response.send(JSON.stringify({ "status": 200, 'error': '', 'message': doctors }));
  };


exports.registeration = (request,reponse)=>{

    const doctordata={doctor_name:request.body.doctor_name,doctor_specialities:request.body.doctor_specialities,
        doctor_mobileno:request.body.doctor_mobileno,doctor_email:request.body.doctor_email,doctor_password:request.body.doctor_password
    }

    const Doctor = new doctor(doctordata)
    Doctor.save();
    reponse.send("Doctor Registeration Done!!")
}

exports.login = async(request,reponse)=>{
    console.log(request.body.email)
    const allusers =     await doctor.findOne({"doctor_email":request.body.email});
    console.log(allusers)
    if (request.body.password == allusers.doctor_password){
      
        reponse.send(JSON.stringify({"status":200,'error':'','message':allusers}))
        
    }else{
        reponse.send(JSON.stringify({"status":200,'error':'','message':'incorrect email or password'}))
    }
}

exports.doctorlist=(req,res)=>{
    db.query("SELECT COUNT(*) AS type_D FROM users type = 'D",[],(error,results)=>{
        res.send(JSON.stringify({"status":200,"error":null,"message":results}));
    })
}