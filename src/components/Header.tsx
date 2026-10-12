import { Link } from "react-router";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to={'/'} className="hover:underline">Home</Link></li>
            <li><Link to={'/about'} className="hover:underline">About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
