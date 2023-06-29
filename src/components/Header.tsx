import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="flex justify-end pr-20 pt-2 sticky top-0">
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
