import { Link } from "react-router-dom";

function HeaderResources() {
  return (
    <>
      <nav className="flex w-full justify-center">
        <ul className="flex gap-5">
          <li>
            <Link to="/resources/css">CSS</Link>
          </li>
          <li>
            <Link to="/resources/tailwind">Tailwind</Link>
          </li>
          <li>
            <Link to="/">tbd</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderResources;
