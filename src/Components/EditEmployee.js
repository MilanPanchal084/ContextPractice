import React, { useContext, useDebugValue, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

const EditEmployee = () => {
   const { editEmployee, employees } = useContext(GlobalContext);
   const [selectedUser, setSelectedUser] = useState({
      id: null,
      name: "",
      location: "",
      designation: "",
   });

   const params = useParams();
   const currentUserId = params.id;
   const navigate = useNavigate();

   const handleChange = (userkey, value) => {
      setSelectedUser({ ...selectedUser, [userkey]: value });
      console.log(selectedUser);
   };

   useEffect(() => {
      const empId = currentUserId;
      const selectedUser = employees.find((emp) => emp.id === parseInt(empId));
      setSelectedUser(selectedUser);
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      editEmployee(selectedUser);
      navigate("/");
   };

   return (
      <>
         <div className="container">
            <h1>Edit Employee</h1>
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
                     onChange={(e) => handleChange("name", e.target.value)}
                     placeholder="Enter name"
                     value={selectedUser.name}
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
                     onChange={(e) => handleChange("location", e.target.value)}
                     placeholder="Enter location"
                     value={selectedUser.location}
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
                     onChange={(e) =>
                        handleChange("designation", e.target.value)
                     }
                     placeholder="Enter designation"
                     value={selectedUser.designation}
                  />
               </div>
               <div className="d-flex justify-content-between col-md-2">
                  <div className="d-flex items-center justify-content-between">
                     <button className="btn btn-primary">Update</button>
                  </div>
                  <div>
                     <Link to="/" className="btn btn-danger">
                        Cancel
                     </Link>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};

export default EditEmployee;
