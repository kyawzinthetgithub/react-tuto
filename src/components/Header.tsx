import { NavLink } from "react-router";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to={'/'} className={({isActive}) => isActive ? "underline" : "hover:underline"}>Home</NavLink></li>
            <li><NavLink to={'/about'} className={({isActive}) => isActive ? "underline" : "hover:underline"}>About</NavLink></li>
            <li><NavLink to={'/users'} className={({isActive}) => isActive ? "underline" : "hover:underline"}>Users</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
