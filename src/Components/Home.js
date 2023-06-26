import React from "react";
// import Heading from "./Heading";
import EmployeeList from "./EmployeeList";

export default function Home() {
   let data = JSON.parse(localStorage.getItem("EmployeeDetails"));
   console.log(data);
   return (
      <div className="container">
         <h1>CRUD operation practice</h1>
         <EmployeeList />
      </div>
   );
}
