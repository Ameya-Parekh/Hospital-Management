import {useLocation,useParams,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/prform.css'
const Pres=()=>{

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.pathname);
    const [name,getName]=useState('')
    const [phoneno,getPhoneno]=useState('')
    const [age,getAge]=useState('')
    const [email,getEmail]=useState('')
    const [password,getPassword]=useState('')
    const [gender,getGender]=useState('')
    const [disease,getDisease]=useState('')
    const [treatment,getTreatment]=useState('')
    const [formerror,getFormerror]=useState('')
    const[formName,getFormName] = useState('Prescription Form');
    const[buttonName,getButtonName] = useState('Submit')
    const params = useParams();
    // console.log(params.id)
    useEffect(()=>{
        if(params.id){
            getFormName('Update Form')
            getButtonName('update')
         
    
        }
        if(location.pathname=='/login'){
            getFormName('Login Form')
            getButtonName('login')
            getName('abcd')
            getPhoneno('99875')
            getAge('23')
            getGender('male')
            getDisease('aaaa')
            getTreatment('aaaa')
        }
        if(location.pathname=='/prescription'){
            getEmail('kflkfklf')
            getPassword('kcnswiffn')
        }
    })


    const handlename=(e)=>{
        getName(e.target.value);
    }
    const handlephoneno=(e)=>{
        getPhoneno(e.target.value);
    }
    const handleage=(e)=>{
        getAge(e.target.value);
    }
    const handleemail=(e)=>{
        getEmail(e.target.value);
    }
    const handlepassword=(e)=>{
        getPassword(e.target.value);
    }
    const handlegender=(e)=>{
        getGender(e.target.value);
    }
    const handledisease=(e)=>{
        getDisease(e.target.value);
    }
    const handletreatment=(e)=>{
        getTreatment(e.target.value);
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(name,phoneno,age,gender,disease,treatment)
        if(name == ''){
            getFormerror("Please Enter your Name")
        }else if(phoneno==''){
            getFormerror("Please Enter your Phone Number")
        }
        else if(age==''){
            getFormerror("Please Enter your Age")
        }
    
        else if(gender==''){
            getFormerror("Please Enter your Gender")
        }

        else if(email==''){
            getFormerror("Please Enter your Email")
        }

        else if(password==''){
            getFormerror("Please Enter your Password")
        }

        else if(disease==''){
            getFormerror("Enter Disease")
        }
        else if(treatment==''){
            getFormerror("Enter Treatment")
        }else{
            getFormerror('')
            if(location.pathname=='/login'){
                let formdata = {email:email,password:password}
                axios.post('http://localhost:7768/doctor/login',formdata).then((response)=>{
                    console.log(response.data.message)
                    if(response.data.message == 'incorrect email or password'){
                        getFormerror(response.data.message)
                    }else{
                        localStorage.setItem('doctor_email',response.data.message.doctor_email)
                        localStorage.setItem('doctor_password',response.data.message.doctor_password)
                        localStorage.setItem('doctor_name',response.data.message.doctor_name)
                        localStorage.setItem('_id',response.data.message._id)
                        navigate('/prescription')
                }
                })
            }else{
                let formdata = {name:name,phoneno:phoneno,age:age,gender:gender,disease:disease,treatment:treatment}
                axios.post('http://localhost:7768/patients/prescription',formdata).then((response)=>{
                    console.log(response)
                    getFormerror("Patient Record created sucessfully!!")


                })
            }
        }
    }
    
    return(

        <>
             <div id="form-body-container">
                <div class="header-form">{formName}</div>
                <div class="error">{formerror}</div>

                {buttonName!='login'&&
                <>
                
                <div class="input-box">
                    <label for="name">Name:-</label>
                    <input type="text" placeholder="Name" value={name} onChange={handlename}/>
                </div>
                <div class="input-box">
                    <label for="phoneno">Phone No:-</label>
                    <input type="text" placeholder="Phone No" value={phoneno} onChange={handlephoneno}/>
                </div>
                <div class="input-box">
                    <label for="age">Age:-</label>
                    <input type="text" placeholder="Age" value={age} onChange={handleage}/>
                </div>
            
            </>
                
}           
   
                {buttonName=='login'&&
                <>
                <div class="login">
                <div class="input-box">
                    <label for="email">Email:-</label>
                    <input type="text" placeholder="Email" value={email} onChange={handleemail}/>
                </div>
                <div class="input-box">
                    <label for="password">Password:-</label>
                    <input type="password" placeholder="Password" value={password} onChange={handlepassword}/>
                </div>
                </div>
            </>
        }
            {buttonName!='login'&&
            <>
                <div class="input-box">
                    <label for="gender">Gender:-</label>
                    <input type="text" placeholder="Gender" value={gender} onChange={handlegender}/>
                </div>
                <div class="input-box">
                    <label class="disease" for="disease">Disease:-</label>
                    <input type="text" placeholder="Disease" value={disease} onChange={handledisease}/>
                </div>      
                </>
} 
                <div class="input-box">
                {buttonName!='login' &&
                <>
                    <label class="treatment" for="treatment">Treatment:-</label>
                    <input type="text" placeholder="treatment" value={treatment} onChange={handletreatment}/>
                </>

    }
                </div>
   
                <input class="submit" type="Submit" value={buttonName} onClick={handlesubmit}/>

                </div>
                <img class="image" src="https://www.nih.gov/sites/default/files/news-events/research-matters/2017/20170523-prescription.jpg" alt="" />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
        </>

    )
}
export default Pres