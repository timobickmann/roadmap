import SidebarResourcesItem from "./SidebarResourcesItem";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

function SidebarResources() {
  const [isOpened, setIsOpened] = useState(false);
  const media = window.matchMedia("(min-width: 640px)");
  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <div>
        <button onClick={handleClick} className=" fixed sm:hidden z-30">
          <FaBars />
        </button>
        {(isOpened || media) && (
          <aside className="sticky bottom-0 left-0 top-0 z-20 h-screen w-full sm:w-40 shrink-0 overflow-y-scroll bg-gray-800 px-6 scrollbar-hide ">
            <nav className="">
              <ul className="flex flex-col gap-5 py-10">
                <SidebarResourcesItem item="Vite" />
                <SidebarResourcesItem item="Tailwind" />
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </>
  );
}

export default SidebarResources;
