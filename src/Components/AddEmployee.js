import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const AddEmployee = () => {
   
   const [name, setName] = useState("");
   const [location, setLocation] = useState("");
   const [designation, setDesignation] = useState("");
   const { addEmployee, employees } = useContext(GlobalContext);
   
   const navigate = useNavigate();

   const handleSubmit = (e)=>{
      const newEmployee= {
         id: employees.length + 1,
         name,
         location,
         designation,
      }
      addEmployee(newEmployee);
      localStorage.setItem("EmployeeDetails", JSON.stringify([ ...employees, newEmployee ]));
      e.preventDefault();
      // navigate("/");    
      // console.log(newEmployee);
   }

   return (
      <>
         <div className="container">
            <h1>Add Employee</h1>
         </div>
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                     Name
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Enter name"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                     Location
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="location"
                     name="location"
                     onChange={(e) => setLocation(e.target.value)}
                     placeholder="Enter location"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                     Designation
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="designation"
                     name="designation"
                     onChange={(e) => setDesignation(e.target.value)}
                     placeholder="Enter designation"
                  />
               </div>
               <div className="d-flex justify-content-between col-md-2">
                  <div className="d-flex items-center justify-content-between">
                     <button className="btn btn-primary">Add Employee</button>
                  </div>
                  <div>
                     <Link to="/" className="btn btn-danger">Cancel</Link>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default AddEmployee;
