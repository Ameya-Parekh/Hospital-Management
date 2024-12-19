import logo from './logo.svg';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/homepage';
import About from './pages/aboutus';
import Prescription from './pages/prescriptionpage';

import Login from './pages/loginpage';

import Profile from './pages/drprofile';
import Doctordash from './pages/doctorsdashboard';


function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/prescription' element={<Prescription/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/edit/:id' element={<Prescription/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='dashboard' element={<Doctordash/>}/>
  
            </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
