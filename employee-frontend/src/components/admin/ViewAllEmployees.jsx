


import axios from 'axios'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import NavbarAdmin from './NavbarAdmin'


const ViewAllEmployees = () => {
  
  const navigate = useNavigate();
  const [ViewAllEmployData,SetViewAllEmployData ] = useState([])
 
useEffect(
  ()=>{
    fetchAllEmployData()
  },[]
  
  
)

const fetchAllEmployData =()=>{
  axios.post('http://localhost:3002/viewallemployees')
  .then((data)=>{
   
    SetViewAllEmployData(data.data)
  })
.then((res)=>res.json())
  .catch(
    (err)=>{

      console.log(err)
    }
    )
  
}

const redirectToUpdatePage =()=>{
  navigate('/updateemployee')
}


const onDelete = async (_id)=>{

   alert('deleted successfully')

  
 }
 



 

    
  return (
  <>
    
    
    <div>
      <NavbarAdmin />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              <h3>View all the Employees Here....</h3>
              {ViewAllEmployData.map((data)=>{
                return  <div className="col-col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
  <div className="row">
    <div className="col-sm-12">
      <div className="card bg-light  m-3 ">
        <div className="card-body ">
        <p className="card-text  ">UserId:{data._id} </p>
          <p className="card-text ">Full Name:{data.FullName} </p>
          <p className="card-text">Location:{data.Location} </p>
          <p className="card-text">Position:{data.Position} </p>
          <p className="card-text">Salary:{data.Salary} </p>
          <p className="card-text">addedDate : {data.addedDate}</p>
         <div>
          <button class="btn btn-primary m-4" type="button"  onClick={redirectToUpdatePage}>Update
          </button>
        
         

          <button class="btn btn-danger m-4" type="button" onClick={()=> onDelete(data._id)}>Delete
       
          </button>
          </div>
        </div>
         
        </div>
      </div>
    </div>


  </div>





              })}
             




            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default ViewAllEmployees;