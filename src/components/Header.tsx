import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

function Header() {
  return (
    <>
      <nav className="flex w-full items-center justify-between px-20 py-2">
        <Link to="/">
          <FaHouse />
        </Link>
        <ul className="flex gap-5">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
