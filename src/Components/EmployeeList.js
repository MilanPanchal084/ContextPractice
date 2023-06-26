import React, { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const EmployeeList = () => {
   const { employees } = useContext(GlobalContext);
   const [employeeList, setEmployeeList] = useState([]);
   const [filterText, setFilterText] = React.useState("");

   useEffect(() => {
      let data = localStorage.getItem(
         "EmployeeDetails",
         JSON.stringify(...employees)
      );
      data = JSON.parse(data);
      console.log(data);
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
   ];
   return (
      <Fragment>
         {employeeList.length > 0 ? (
            <Fragment>
               <DataTable columns={columns} data={employeeList} />
            </Fragment>
         ) : (
            <p className="text-center bg-gray-100 text-gray-500 py-5">
               No data
            </p>
         )}
      </Fragment>
   );
};

export default EmployeeList;
