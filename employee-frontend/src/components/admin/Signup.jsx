import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");
  
    const handleSubmit = (e) => {
      if (userType == "Admin" && secretKey != "PearSMom") {
        e.preventDefault();
        alert("Invalid Admin");
      } else {
        e.preventDefault();
  
        console.log(fname, lname, email, password);
        axios.get('http://localhost:3005/api/signup')
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("You have Successfully Registered");
            } else {
              alert("Error in registering");
            }
          });
      }
    };

  return (
    <div >
        <div className="container y">
            <div className="row">
            <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 className='m-3 bold '>Sign Up</h3>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div>
              <h5 className='m-4'>Register As</h5>
              <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}

              />
              User
              <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
              />
              Admin
            </div>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {userType == "Admin" ? (
              <div className="mb-3">
                <label>Secret Key</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Secret Key"
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
            ) : null}
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
  
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
                </div>
              
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
                </div>


                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <button className="btn btn-outline-light btn-md px-5 btn-primary" type="submit " >Signup</button>
                          </div>


            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
            </div>
            </form>
            </div>
        </div>
</div>
</div>
             
            
            
  
            
  
           
  
            
  </div>
          
  )
}

export default Signup