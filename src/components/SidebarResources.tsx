import { Link } from "react-router-dom";
import SidebarResourcesItem from "./SidebarResourcesItem";

function SidebarResources() {
  return (
    <>
      <aside className="sticky top-0 min-h-screen bg-gray-800 px-6">
        <nav className="">
          <ul className="flex flex-col gap-5 pt-10">
            <SidebarResourcesItem item="Tailwind" />
            <SidebarResourcesItem item="CSS" />
            <SidebarResourcesItem item="tbd" />
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default SidebarResources;
