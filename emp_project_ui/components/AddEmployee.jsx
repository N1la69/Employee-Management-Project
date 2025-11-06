import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log("Employee added successfully: ", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error while adding employee", err);
      });
  };

  return (
    <div className="max-w-xl rounded mx-auto shadow py-4 px-8 bg-blue-400 flex flex-col justify-center items-center space-y-4">
      <h1 className="font-bold text-white text-3xl tracking-wider">
        Add New Employee
      </h1>

      <div className="flex flex-col justify-center items-center space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={(e) => handleChange(e)}
          className="border border-white px-2 py-1 rounded-md text-slate-900"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={(e) => handleChange(e)}
          className="border border-white px-2 py-1 rounded-md text-slate-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={(e) => handleChange(e)}
          className="border border-white px-2 py-1 rounded-md text-slate-900"
        />
      </div>

      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={saveEmployee}
          className="uppercase px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded cursor-pointer transition-colors duration-200"
        >
          Save
        </button>
        <button
          onClick={reset}
          className="uppercase px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded cursor-pointer transition-colors duration-200"
        >
          Clear
        </button>
        <button
          onClick={() => navigate("/")}
          className="uppercase px-4 py-2 bg-red-700 hover:bg-red-900 text-white rounded cursor-pointer transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
