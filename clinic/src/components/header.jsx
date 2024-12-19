import '../css/registermin.css'
import {useNavigate} from 'react-router-dom'

const Header=()=>{
    const navigate=useNavigate();
    let doctor_email = localStorage.getItem('doctor_email')
    const doctor_name = localStorage.getItem('doctor_name')
    console.log(doctor_name)
    let logouthandler = ()=>{
        localStorage.clear();
        navigate('/login')
    }
    // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>


    return(

        <>
            <div class="header-li">
                <li><a class="anchor" onClick={()=>{navigate('/')}}>Home</a></li>
                <li><a class="anchor" onClick={()=>{navigate('/about')}}>About</a></li>
                {doctor_email &&
                <>
                <li><a class="anchor" onClick={()=>{navigate('/prescription')}}>Appointment</a></li>        
                <li><a class="anchor" onClick={()=>{navigate('/dashboard')}}>Doctor Dashboard</a></li> 
                <li><a class="anchor" onClick={()=>{navigate('/profile')}}>Profile</a></li> 
                </>
                }
                {!doctor_email &&
                        <li><a class="anchor" onClick={()=>{navigate('/login')}}>Login</a></li>
                }
                {doctor_email &&
                <li><a class="anchor" onClick={()=>{logouthandler()}}>{doctor_name} Logout</a></li>
 
                }
            </div>
            <div class="layout">
                
               
                <img class="allinone" src="https://cdn.pixabay.com/photo/2016/03/31/20/12/doctor-1295581_1280.png" alt="" />
                <img class="allinone" src="https://webstockreview.net/images/healthcare-clipart-21.png" alt="" />
                <h2 class="twitter">Email Id:- Ameya@gmail.com</h2>
                <h2 class="twitter">Book My Appointment</h2>
                <h2 class="twitter">Book My Surgery</h2>
                <h2 class="twitter">Emergency</h2>
                {/* <img class="allinone" src="https://icon-library.com/images/surgeon-icon/surgeon-icon-12.jpg" alt="" /> */}
                
       

            </div>
            
        </>
    )
}
export default Header