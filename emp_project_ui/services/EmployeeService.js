import axios from "axios";

const BACKEND_URL = "http://localhost:9090/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(BACKEND_URL, employee);
  }

  getEmployees() {
    return axios.get(BACKEND_URL);
  }

  getEmployeeById(id) {
    return axios.get(BACKEND_URL + "/" + id);
  }

  deleteEmployee(id) {
    return axios.delete(BACKEND_URL + "/" + id);
  }

  editEmployee(id, employee) {
    return axios.put(BACKEND_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
