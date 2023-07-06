import SidebarResourcesItem from "./SidebarResourcesItem";
import { FaBars } from "react-icons/fa6";
import { AppContext } from "../AppContext";
import { useContext } from "react";

function SidebarResources() {
  const { sidebarIsOpened, toggleSidebarIsOpened, isMobile } =
    useContext(AppContext);

  return (
    <>
      <div className="flex">
        {(!isMobile || sidebarIsOpened) && (
          <aside className="fixed bottom-0 left-0 top-0 z-40 h-screen w-60 shrink-0 overflow-y-scroll bg-gray-700 px-6 scrollbar-hide sm:sticky sm:w-40 sm:bg-gray-700">
            <nav className="">
              <ul className="flex flex-col gap-5 py-10">
                <SidebarResourcesItem item="Vite" />
                <SidebarResourcesItem item="Tailwind" />
                <SidebarResourcesItem item="daisyUI" />
              </ul>
            </nav>
          </aside>
        )}
        {isMobile && sidebarIsOpened && (
          <div
            onClick={toggleSidebarIsOpened}
            className="fixed z-30 h-screen w-screen bg-black bg-opacity-50"
          ></div>
        )}
      </div>
    </>
  );
}

export default SidebarResources;
