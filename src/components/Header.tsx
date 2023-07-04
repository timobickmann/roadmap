import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex justify-center md:justify-end py-2 mb-10 w-full sticky px-5 md:px-10 lg:px-20 top-0 z-10 bg-gray-700">
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
