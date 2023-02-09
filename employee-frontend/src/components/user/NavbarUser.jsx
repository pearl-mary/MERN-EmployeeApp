import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarUser = () => {
  let Navigate = useNavigate()

  const readSignoutvalue=()=>{
   
  sessionStorage.removeItem("userId")
  Navigate("/")
  
  
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/viewallemployees">Employee Dashboard</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link active" href="/useremployeelist">View all Employees</a>
        </li>
        
       
      <li className="nav-item">
        <button className= "btn btn-outline-light btn-md px-5 btn-danger justify-content-md-end" onClick= {readSignoutvalue}>Log Out</button>
      </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarUser