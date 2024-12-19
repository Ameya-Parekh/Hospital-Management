const express = require('express');
const app = express();
const cors = require('cors')
const port = 7768
app.use(cors());
app.use(express.json());
app.use('/patients',require('./routes/patientroutes'))
app.use('/doctor',require('./routes/doctorroutes'))
app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log(`Server has started at port ${port}`)
    }

})