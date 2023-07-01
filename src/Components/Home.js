import React from "react";
import EmployeeList from "./EmployeeList";

export default function Home() {
   let data = JSON.parse(localStorage.getItem("EmployeeDetails"));
   return (
      <div className="container">
         <h1>CRUD operation practice</h1>
         <EmployeeList />
      </div>
   );
}
