
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/admin/AddEmployee';

import NavbarAdmin from './components/admin/NavbarAdmin';
import ViewAllEmployees from './components/admin/ViewAllEmployees';
import LoginUser from './components/user/LoginUser';
import NavbarUser from './components/user/NavbarUser';
import  ViewOnly  from './components/user/ViewOnly';
import UpdateEmployee from './components/admin/UpdateEmployee';
import Signup from './components/admin/Signup';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path='/addemployee' exact element ={<AddEmployee/>}/>
      
      <Route path='/navbaradmin' exact element ={<NavbarAdmin/>}/>
      <Route path='/viewallemployees' exact element ={<ViewAllEmployees/>}/>
      
      <Route path='/loginuser' exact element ={<LoginUser/>}/>
      <Route path='/navbaruser' exact element ={<NavbarUser/>}/>
     <Route path='/updateemployee' exact element={<UpdateEmployee/>}/>
      <Route path='/viewonly' exact element ={<ViewOnly/>}/>
      <Route path='/signup'exact element= {<Signup/>}/>
     </Routes>
     
     
     </BrowserRouter> 
    </div>
  );
}

export default App;
