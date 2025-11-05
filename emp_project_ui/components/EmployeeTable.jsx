const EmployeeTable = () => {
  return (
    <>
      <button className="px-16 py-2.5 cursor-pointer text-lg hover:text-white bg-blue-400 hover:bg-blue-700 rounded-lg border border-blue-900 hover:border-blue-300">
        Add Employee
      </button>

      <table className="shadow">
        <thead className="bg-sky-500">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th className="px-6 py-3 uppercase tracking-wide">Email</th>
          <th className="px-6 py-3 uppercase tracking-wide">Phone No.</th>
          <th className="px-6 py-3 uppercase tracking-wide">Actions</th>
        </thead>
        <tbody>
          <tr className="hover:bg-white transition-all duration-200">
            <td className="text-left px-6 py-4 whitespace-nowrap">Nilanjan</td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
              nilu@gmail.com
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">9876</td>
            <td className="text-left px-6 py-4 whitespace-nowrap flex space-x-3 font-semibold">
              <a className="cursor-pointer">Edit</a>
              <a className="cursor-pointer text-red-500">Delete</a>
            </td>
          </tr>

          <tr className="hover:bg-white transition-all duration-200">
            <td className="text-left px-6 py-4 whitespace-nowrap">Nilanjan</td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
              nilu@gmail.com
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">9876</td>
            <td className="text-left px-6 py-4 whitespace-nowrap flex space-x-3 font-semibold">
              <a className="cursor-pointer">Edit</a>
              <a className="cursor-pointer text-red-500">Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EmployeeTable;
