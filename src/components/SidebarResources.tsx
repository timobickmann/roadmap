import { Link } from "react-router-dom";

function SidebarResources() {
  return (
    <>
      <aside className="sticky min-h-screen bg-gray-800 top-0 px-6">
        <nav className="">
          <ul className="flex flex-col gap-5 pt-10">
            <li>
              CSS
              <ul>
                <li>Setup</li>
                <li>Resources</li>
              </ul>
            </li>
            <li>
              Tailwind
              <ul>
                <li>
                  <Link to="/resources/tailwind/setup">Setup</Link>
                </li>
                <li>
                  <Link to="/resources/tailwind">Resources</Link>
                </li>
              </ul>
            </li>
            <li>
              tbd
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SidebarResources;
