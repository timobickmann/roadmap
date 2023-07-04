import SidebarResourcesItem from "./SidebarResourcesItem";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function SidebarResources() {
  const [isOpened, setIsOpened] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 640px)");
  function handleClick() {
    setIsOpened(!isOpened);
  }

  return (
    <>
      <div>
        <button onClick={handleClick} className=" text-xl fixed top-3 left-3 z-30 sm:hidden">
          <FaBars />
        </button>
        {(isNotMobile || isOpened) && (
          <aside className="fixed sm:sticky bottom-0 left-0 top-0 z-20 h-screen w-full shrink-0 overflow-y-scroll bg-gray-800 px-6 scrollbar-hide sm:w-40 ">
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
