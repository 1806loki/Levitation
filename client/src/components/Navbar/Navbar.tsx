import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Your Logo</div>
        <div className="flex space-x-4">
          <Link to="/form" className="text-white text-xl hover:text-gray-300">
            Form
          </Link>
          <Link to="/table" className="text-white text-xl hover:text-gray-300">
            Table
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            to="/auth/login"
            className="text-white  border-2 p-2  hover:bg-white hover:text-black rounded-lg"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="text-white  border-2 p-2  hover:bg-white hover:text-black rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
