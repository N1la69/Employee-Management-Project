const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 h-16 bg-blue-400">
      <div>
        <h1 className="font-bold text-2xl">Employee Management Portal</h1>
      </div>

      <div>
        <button className="cursor-pointer px-3 py-2 rounded-md bg-blue-300 hover:bg-blue-700 hover:text-white transition-colors duration-150">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
