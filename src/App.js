import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { GlobalProvider } from "./Context/GlobalState";
import AddEmployee from "./Components/AddEmployee";

function App() {
   return (
      <GlobalProvider>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/add" element={<AddEmployee />} exact />
            </Routes>
         </Router>
      </GlobalProvider>
   );
}

export default App;
