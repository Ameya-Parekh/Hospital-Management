import '../css/drdashboard.css'
const Doctordashboard=()=>{
    return(
        

        <>
                <div class="dashboard-navbar">
                <h2>Dashboard</h2>
                <input class="search" type="text" placeholder="Search.."></input>
                <img class="icon" src="https://tse1.mm.bing.net/th?id=OIP.qLQCPaWxeYifioMDyQUoJwHaHa&pid=Api&P=0&h=180"/>
                </div>
        <div class="parent">
            <div class="info">
                <img class="twit" src="https://cdn.iconscout.com/icon/free/png-512/health-1659502-1410024.png" alt="" />
                <h3>Total Doctors</h3>
                <h3>7+</h3>
                <h5>Till Today</h5>
            </div>
            <div class="info">
                <img class="twit" src="https://cdn3.iconfinder.com/data/icons/virus-transmission-color/48/Patient-256.png" alt="" />
                <h3>Today Patients</h3>
                <h3>200</h3>
                <h5>9 july 2024</h5>
            </div>
            <div class="info">
            <img class="twit" src="https://www.pngkey.com/png/detail/246-2461646_medical-appointment-icon.png" alt="" />
                <h3>Today Appointments</h3>
                <h3>500</h3>
                <h5>9 july 2024</h5>
            </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div class="what">
            <div class="TodayAppointment">
                <h6>Today's Appointment</h6>
                <tr>
                    <th>Patient</th>
                    <th>Name</th>
                    <th>Diagnosis</th>
                    <th>Time</th>
                 
                </tr>
                <tr>
                    <td><img class="pic" src="https://cdn-icons-png.flaticon.com/512/1430/1430504.png" alt="" /></td>
                    <td>Sarthak Patil</td>
                    <td>Health Checkup</td>
                    <td class="time">On Going</td>
                </tr>
                <tr>
                    <td><img class="pic" src="https://cdn-icons-png.flaticon.com/512/6454/6454810.png" alt="" /></td>
                    <td>Kunal chhabria</td>
                    <td>Health Checkup</td>
                    <td class="time">10.00 AM</td>
                </tr>
                <tr>
                <td><img class="pic" src="https://cdn-icons-png.flaticon.com/512/1430/1430504.png" alt="" /></td>
                    <td>Shubham Patil</td>
                    <td>Health Checkup</td>
                    <td class="time">12.00 PM</td>
                </tr>
                <tr>
                    <td><img class="pic" src="https://cdn-icons-png.flaticon.com/512/4468/4468841.png" alt="" /></td>
                    <td>Rohit Patil</td>
                    <td>Health Checkup</td>
                    <td class="time">1.00 PM</td>
                </tr>
          
            </div>
           
            <div class="xyz">
                <h2>Next Patient Details</h2>
                <img src="https://www.freeiconspng.com/thumbs/patient-icon/patient-icon-0.png" alt="" />
                <p class="new">Name:-Kashish Chahbria</p>
                <p class="old">DOB:-1st january 2001</p>
                <p class="dr">Gender:-Male</p>
                <p class="cr">Appointment:-2.00 PM</p>

            </div>

            </div>
<br /><br /><br /><br /><br /><br /><br /><br />
     

                



            
       

        </>
    )
}

export default Doctordashboard