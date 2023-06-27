import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-20 py-2 bg-gray-900 text-neutral-200 w-full">
        <div>
          <Link to="/">
            <FaHouse />
          </Link>
        </div>
        <ul className="flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
