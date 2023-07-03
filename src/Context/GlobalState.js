import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
   employees: [
      {
         id: 1,
         name: "Milan",
         location: "Ahmedabad",
         designation: "Backend_Dev",
      },
   ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   function addEmployee(employee) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: employee
      });
    }

   const removeEmployee = (id) => {
       dispatch({
           type: "REMOVE_EMPLOYEE",
           payload: id,
       });
   }

   const editEmployee = (employees) => {
       dispatch({
           type: 'EDIT_EMPLOYEES',
           payload: employees,
       })
   }

   return (
      <GlobalContext.Provider
         value={{
            employees: state.employees,
            addEmployee,
            removeEmployee,
            editEmployee
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};
