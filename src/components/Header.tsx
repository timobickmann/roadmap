import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
  const {isMobile, toggleSidebarIsOpened} = useContext(AppContext)
  return (
    <>
    <menu className="bg-base-100 flex items-center justify-between sm:justify-end py-2.5 w-full px-5 sticky top-0 z-10 mb-10 ">
    {isMobile && (
          <button onClick={toggleSidebarIsOpened} className="text-xl sm:hidden">
            <FaBars />
          </button>
        )}
        
      <nav>
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
      </nav></menu>
    </>
  );
}

export default Header;
