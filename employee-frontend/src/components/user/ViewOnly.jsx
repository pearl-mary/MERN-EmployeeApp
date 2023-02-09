import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavbarUser from './NavbarUser'

const ViewOnly = () => {


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
 
  return (
    <div>
        <NavbarUser/>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           
               <div className="row g-3">
            <h3>View all the Employees Here....</h3>
            {ViewAllEmployData.map((value,index)=>{
            
            return <table
            class="table table-success table-striped  table-hover"
            style={{
              border: "solid 2px primary",
              borderRadius: "20px !important",
            }}
          >

            <thead className="table-light">
              <tr>
              <th scope="row"></th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Location</th>
                <th scope="col">Position</th>
                <th scope="col">Salary</th>
              
              </tr>
            </thead>
           
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row"></th>
                    <td>{value._id}</td>
                   <td>{value.FullName}</td>
                   <td>{value.Location}</td>
                   <td>{value.Position}</td>
                   <td>{value.Salary}</td>
             
                  </tr>
                </tbody>
             
          </table>

             }) }
            
                

          </div>
        </div>
      </div>

    </div>

   </div>
  )
}

export default ViewOnly