import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginUser = () => {
  const navigate= useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState();
  
  const userAuthentication =()=>{
    const userData= {
      "email":email,
      "password":password
    }
    console.log(userData)
    axios.post(`http://localhost:3005/login`,userData
    ).then((response)=>{
      console.log(response.data)
      if(response.data.status=="success"){
        let token=response.data.token
        let userId=response.data.data[0]._id
        alert("valid user")

        sessionStorage.setItem("userToken",token)
        sessionStorage.setItem("userId",userId)

        navigate("./userDetails")
        
      }
      else{
        alert("invalid user");
      }
    })
  }
  
  return (
    <div>
          
          <section class=" gradient-custom py-5 h-300">

<div class="container py-5 h-200">
  <div class="row d-flex justify-content-center align-items-center h-200">
    <div class="col-12 col-md-8 col-lg-6 col-xl-6">
      <div class="card text-white" id='signup-card'>
        <div class="card-body p-5 text-center"  id='loginusercard'>

          <div class="mb-md-5 mt-md-4 pb-5">
          <div className="auth-wrapper">
    <div className="auth-inner">
      <form onSubmit={userAuthentication}>
            <h2 class=" mb-2 ">Login now</h2>
            <p class="text-white-50 mb-5">Blog and post with your friends now</p>
            <div className="row g-3">
              
              

              
              <div class="col col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6 form-outline form-white mb-4">
                <input type="email"
                  name='Email'
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  class="form-control "
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                     />

              </div>
              
              

              <div class="col col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6 form-outline form-white mb-5">
                <input type="password"
                  name='Password'
                  id="exampleInputPassword1"
                  class="form-control "
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                 />
              </div>

              

             


            </div>
            <button class="btn btn-outline-light btn-md px-5 btn-primary"  type="submit" >Login</button>

</form>
          </div>

          <div>
           
          
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section> 


    </div>
  )
}

export default LoginUser