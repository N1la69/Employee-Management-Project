import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const res = await EmployeeService.getEmployees();
        setEmployees(res.data);
      } catch (error) {
        console.log("Error fetching employees: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const deleteEmp = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        console.log("Employee deleted successfully: ", res.data);
        if (employees) {
          setEmployees(employees.filter((emp) => emp.id !== id));
        }
      })
      .catch((err) => {
        console.log("Error while deleting employee", err);
      });
  };

  const editEmp = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  };

  return (
    <>
      <button
        onClick={() => navigate("/addEmployee")}
        className="px-16 py-2.5 cursor-pointer text-lg hover:text-white bg-blue-400 hover:bg-blue-700 rounded-lg border border-blue-900 hover:border-blue-300"
      >
        Add Employee
      </button>

      <table className="shadow">
        <thead className="bg-sky-500">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th className="px-6 py-3 uppercase tracking-wide">Email</th>
          <th className="px-6 py-3 uppercase tracking-wide">Phone No.</th>
          <th className="px-6 py-3 uppercase tracking-wide">Actions</th>
        </thead>
        {!loading && (
          <tbody>
            {employees.map((employee) => (
              <tr
                className="hover:bg-white transition-all duration-200"
                key={employee.id}
              >
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {employee.name}
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {employee.email}
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {employee.phone}
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap flex space-x-3 font-semibold">
                  <a
                    className="cursor-pointer hover:text-blue-500"
                    onClick={(e, id) => editEmp(e, employee.id)}
                  >
                    Edit
                  </a>
                  <a
                    className="cursor-pointer text-red-400 hover:text-red-500"
                    onClick={(e, id) => deleteEmp(e, employee.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default EmployeeTable;
