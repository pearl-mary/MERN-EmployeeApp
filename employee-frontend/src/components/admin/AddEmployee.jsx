import React, { useState } from 'react'
import NavbarAdmin from './NavbarAdmin'
import  axios from 'axios'
const AddEmployee = () => {

  const [NewEmployData,SetNewEmployData] = useState( {
 
    FullName :"",
 Location: "",
Position: "",
Salary: ""

})




const readNewEmployData = ()=>{
  console.log(NewEmployData)
  axios.post('http://localhost:3002/addemployee',NewEmployData)
  .then(
    (response)=>{
     console.log(response.data)
     if (response.data.Status==="Success") {
      alert("New Employee has been uploaded")
      SetNewEmployData(
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
        SetNewEmployData(
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

                    <h2 className=" mb-2 m-4">Add new Employees  here !!!</h2>

                    <div className="form-outline form-white mb-4">
                      <input type="text" class="form-control "
                        placeholder='Enter FullName here'
                        name='FullName'
                        onChange={inputHandler}
                        value={NewEmployData.FullName}
                      />

                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="hidden" class="form-control "
                        placeholder='Enter UserId here'
                        name='_id'
                        onChange={inputHandler}
                        value={NewEmployData._id}
                      />

                    </div>

                    

                    <div className="form-outline form-white mb-4">
                      <input type="text" class="form-control "
                        placeholder='Enter Location  here'
                        name='Location'
                        onChange={inputHandler}
                        value={NewEmployData.Location}
                      />

                    </div>

                    <div className="form-outline form-white mb-4">
                    <input type="text" class="form-control "
                        placeholder='Enter job Designation  here !!'
                        name='Position'
                        onChange={inputHandler}
                        value={NewEmployData.Position}
                    />

                    </div>

                    <div className="form-outline form-white mb-4">
                    <input type="text" class="form-control "
                        placeholder='Enter monthly salary'
                        name='Salary'
                        onChange={inputHandler}
                        value={NewEmployData.Salary}
                    />

                    </div>
                    

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <button className="btn btn-outline-light btn-md px-5 btn-primary" type="submit " onClick={readNewEmployData}>Add New Employee</button>
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

export default AddEmployee