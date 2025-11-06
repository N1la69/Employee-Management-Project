import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(res.data);
      } catch (error) {
        console.log("Error fetching employee: ", error);
      }
    };
    fetchEmployee();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.editEmployee(employee.id, employee)
      .then((res) => {
        console.log("Employee updated successfully: ", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error while updating employee", err);
      });
  };

  return (
    <div className="max-w-xl rounded mx-auto shadow py-4 px-8 bg-blue-400 flex flex-col justify-center items-center space-y-4">
      <h1 className="font-bold text-white text-3xl tracking-wider">
        Update Employee
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
          onClick={updateEmployee}
          className="uppercase px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded cursor-pointer transition-colors duration-200"
        >
          Update
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

export default UpdateEmployee;
