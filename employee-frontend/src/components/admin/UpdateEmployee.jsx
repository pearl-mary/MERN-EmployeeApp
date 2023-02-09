import axios from 'axios'
import React, { useState } from 'react'
import NavbarAdmin from './NavbarAdmin'

const UpdateEmployee = () => {

    const[updateEmpData,SetUpdateEmpData] = useState(
        {
 
            FullName :"",
         Location: "",
        Position: "",
        Salary: ""
        
        }
    )
    
    const readupdateEmployData = ()=>{
        console.log(updateEmpData)
        axios.post('http://localhost:3002/updateemployee',updateEmpData)
        .then(
          (response)=>{
           console.log(response.data)
           if (response.data.Status ==="updated") {
            alert("New Employee has been uploaded")
            SetUpdateEmpData
                (
            {
              FullName :"",
           Location: "",
          Position: "",
          Salary: ""
          
          }
            )
           } else {
            
           }
          }
            ).catch(
          (error)=>{
            alert("There is error in loading"+error)
          }
            )
          
          }
    
          const inputHandler =(event)=>{
            const {name,value} = event.target
              SetUpdateEmpData(
              (previousState)=>({
            
                ...previousState,
                   [name]:value
              })
            )
          }
  return (
    <div>
        <NavbarAdmin/>
<section className = "bg-light">
<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-8">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className=" mb-2 m-4">Update Employee Information here !!!</h2>

                    <div className="form-outline form-white mb-4">
                      <input type="text" class="form-control "
                        placeholder='Enter FullName here'
                        name='FullName'
                        onChange={inputHandler}
                        value={updateEmpData.FullName}
                      />

                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="text" class="form-control "
                        placeholder='Enter UserId here'
                        name='_id'
                        onChange={inputHandler}
                        value={updateEmpData._id}
                      />

                    </div>

                    

                    <div className="form-outline form-white mb-4">
                      <input type="text" class="form-control "
                        placeholder='Enter Location  here'
                        name='Location'
                        onChange={inputHandler}
                        value={updateEmpData.Location}
                      />

                    </div>

                    <div className="form-outline form-white mb-4">
                    <input type="text" class="form-control "
                        placeholder='Enter job Designation  here !!'
                        name='Position'
                        onChange={inputHandler}
                        value={updateEmpData.Position}
                    />

                    </div>

                    <div className="form-outline form-white mb-4">
                    <input type="text" class="form-control "
                        placeholder='Enter monthly salary'
                        name='Salary'
                        onChange={inputHandler}
                        value={updateEmpData.Salary}
                    />

                    </div>
                    

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <button className="btn btn-outline-light btn-md px-5 btn-primary" type="submit " onClick={readupdateEmployData }>Update</button>
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

export default UpdateEmployee