// export default (state, action) => {
//     switch (action.type) {
//        case "ADD_EMPLOYEE":
//           return ({
//              ...state,
//              employees: [ action.payload, ...state.employees ],
//           });
//       //  case "REMOVE_EMPLOYEE":
//       //     return {
//       //        ...state,
//       //        employees: state.employees.filter(
//       //           (employee) => employee.id !== action.payload
//       //        ),
//       //     };
//       //  case "EDIT_EMPLOYEES":
//       //     const updatedEmployee = action.payload;
//       //     const updatedEmployees = state.employees.map((employee) => {
//       //        if (employee.id === updatedEmployee.id) {
//       //           return updatedEmployee;
//       //        }
//       //        return employee;
//       //     });
//       //    return {
//       //        ...state,
//       //        employees: updatedEmployees,
//       //     };
//        default:
//           return state;
//     }
//  };

function AppReducer(state, action) {
   switch (action.type) {
      case "ADD_EMPLOYEE":
         return {
            ...state,
            employees: [...state.employees, action.payload],
         };
      //  case "REMOVE_EMPLOYEE":
      //     return {
      //        ...state,
      //        employees: state.employees.filter(
      //           (employee) => employee.id !== action.payload
      //        ),
      //     };
      //  case "EDIT_EMPLOYEES":
      //     const updatedEmployee = action.payload;
      //     const updatedEmployees = state.employees.map((employee) => {
      //        if (employee.id === updatedEmployee.id) {
      //           return updatedEmployee;
      //        }
      //        return employee;
      //     });
      //    return {
      //        ...state,
      //        employees: updatedEmployees,
      //     };
      default:
         return state;
   }
}
export default AppReducer;