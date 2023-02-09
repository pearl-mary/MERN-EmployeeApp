import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarAdmin = () => {

  let Navigate = useNavigate()

  const readSignoutvalue=()=>{
    //here when the user logsout whatver values stored in sessionStorage shuld be removed
  sessionStorage.removeItem("userId")
  Navigate("/")
  
  
  }
  
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="/homepg"> <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 20 20">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg><h5>Admin Dashboard</h5></a>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link active text-white" href="/viewallemployees">View all Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/addemployee">Add Employee</a>
        </li>
        
      <li className="nav-item">
        <button className= "btn btn-outline-light btn-md px-5 btn-primary justify-content-md-end" onClick={readSignoutvalue} >Log Out</button>
      </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavbarAdmin