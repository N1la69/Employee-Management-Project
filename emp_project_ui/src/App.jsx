import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";
import EmployeeTable from "../components/EmployeeTable";
import Navbar from "../components/Navbar";
import UpdateEmployee from "../components/UpdateEmployee";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-blue-100 h-screen">
        <Navbar />

        <div className="space-y-5">
          <h1 className="font-semibold text-4xl text-center pt-5">
            Employee List
          </h1>

          <div className="container mx-auto flex flex-col items-center space-y-3">
            <Routes>
              <Route index element={<EmployeeTable />} />
              <Route path="/" element={<EmployeeTable />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
