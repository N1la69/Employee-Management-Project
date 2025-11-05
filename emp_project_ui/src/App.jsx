import EmployeeTable from "../components/EmployeeTable";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div className="bg-blue-100 h-screen">
      <Navbar />

      <div className="space-y-5">
        <h1 className="font-semibold text-4xl text-center pt-5">
          Employee List
        </h1>

        <div className="container mx-auto flex flex-col items-center space-y-3">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default App;
