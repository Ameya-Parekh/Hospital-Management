const express = require('express');
const doctorcontroller = require('../controllers/doctorcontroller')
const router = express.Router();
router.get('/doctorlist',doctorcontroller.doctorlist)
router.get('/singleuserlist/(:id)',doctorcontroller.singleuserlist);
router.get('/userlist',doctorcontroller.userlist);
router.post('/registeration',doctorcontroller.registeration)
router.post('/login',doctorcontroller.login)
router.get('/doctorlist',doctorcontroller.doctorlist)
module.exports=router;
