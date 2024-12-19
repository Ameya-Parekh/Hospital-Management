import { useEffect, useState } from "react";
import '../css/drprofile.css'
import axios from 'axios';

const Drprofile = () => {
    const _id = localStorage.getItem('_id');
    const [doctor_name, setDoctorName] = useState('');
    const [doctor_email, setDoctorEmail] = useState('');
    const [doctor_specialities, setDoctorSpecialities] = useState('');
    const [doctor_mobileno, setDoctorMobileno] = useState('');

    useEffect(() => {
        getdoctor();
    }, []); 

    const getdoctor=()=>{
            axios.get('http://localhost:7768/doctor/singleuserlist/'+_id).then((response)=>{;
            console.log(response);
            setDoctorName(response.data.message.doctor_name);
            setDoctorEmail(response.data.message.doctor_email);
            setDoctorSpecialities(response.data.message.doctor_specialities);
            setDoctorMobileno(response.data.message.doctor_mobileno);

    })
}

    return (
        <div className="doctor">
            <div className="doctor-profile">
                <img class="pr" src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg" alt="Doctor" />
                <div className="profile"><b>Name:</b> {doctor_name}</div> <br />
                <div className="profile"><b>Email:</b> {doctor_email}</div> <br />
                <div className="profile"><b>Specialities:</b> {doctor_specialities}</div> <br />
                <div className="profile"><b>Mobile No:</b> {doctor_mobileno}</div> <br />
            </div>
        </div>
    );
}

export default Drprofile;
