import { Link } from "react-router-dom";

function HeaderResources() {
  return (
    <>
      <aside className="fixed w-48 top-20 ml-6">
        <nav className="">
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/resources/css">CSS</Link>
              <ul>
                <li>Setup</li>
                <li>Resources</li>
              </ul>
            </li>
            <li>
              <Link to="/resources/tailwind">Tailwind</Link>
            </li>
            <li>
              <Link to="/">tbd</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default HeaderResources;
