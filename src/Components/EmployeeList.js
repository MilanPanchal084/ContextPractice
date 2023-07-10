import React, { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const EmployeeList = () => {
   const { employees, removeEmployee, editEmployee } =
      useContext(GlobalContext);
   const [employeeList, setEmployeeList] = useState([]);
   const [filterText, setFilterText] = React.useState("");

   useEffect(() => {
      let data = localStorage.getItem(
         "EmployeeDetails",
         JSON.stringify(...employees)
      );
      data = JSON.parse(data);
      setEmployeeList(data);
   }, [employees]);

   const filteredItems = employees.filter(
      (item) =>
         (item.name &&
            item.name.toLowerCase().includes(filterText.toLowerCase())) ||
         (item.location &&
            item.location.toLowerCase().includes(filterText.toLowerCase())) ||
         (item.designation &&
            item.designation.toLowerCase().includes(filterText.toLowerCase()))
   );

   const columns = [
      {
         name: "Employee-id",
         selector: (row) => row.id,
         sortable: true,
      },
      {
         name: "Employee-Name",
         selector: (row) => row.name,
         sortable: true,
      },
      {
         name: "Employee-Location",
         selector: (row) => row.location,
         sortable: true,
      },
      {
         name: "Employee-Designation",
         selector: (row) => row.designation,
         sortable: true,
      },
      {
         name: "Action",
         cell: (row) => (
            <div className="d-flex align-items-center justify-content-start w-100">
               <div className="edit-btn mx-2">
                  <Link to={`/edit/${row.id}`}>
                     <button
                        onClick={() => editEmployee(row.id)}
                        className="btn btn-info"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           className="feather feather-edit"
                        >
                           <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                           <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                     </button>
                  </Link>
               </div>
               <div className="delete-btn mx-2">
                  <button
                     onClick={() => removeEmployee(row.id)}
                     className="btn btn-danger"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-trash-2"
                     >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                     </svg>
                  </button>
               </div>
            </div>
         ),
      },
   ];

   return (
      <Fragment>
         <div className="d-flex align-items-center justify-content-between">
            <input
               type="text"
               onChange={(e) => setFilterText(e.target.value)}
               value={filterText}
               className="search-employee"
            />
            <Link to="/add">
               <button className="btn btn-success addBtn">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     className="feather feather-user-plus"
                  >
                     <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                     <circle cx="8.5" cy="7" r="4"></circle>
                     <line x1="20" y1="8" x2="20" y2="14"></line>
                     <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  AddEmployee
               </button>
            </Link>
         </div>
         <DataTable columns={columns} data={filteredItems} pagination />
      </Fragment>
   );
};

export default EmployeeList;
