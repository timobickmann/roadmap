import SidebarResourcesItem from "./SidebarResourcesItem";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { AppContext } from "../AppContext";

function SidebarResources() {
  const {sidebarIsOpened, toggleSidebarIsOpened} = useContext(AppContext)

  const isNotMobile = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <div>
        <button
          onClick={toggleSidebarIsOpened}
          className=" fixed left-3 top-3 z-30 text-xl sm:hidden"
        >
          <FaBars />
        </button>
        {(isNotMobile || sidebarIsOpened) && (
          <aside className="fixed bottom-0 left-0 top-0 z-20 h-screen w-full shrink-0 overflow-y-scroll bg-gray-800 px-6 pt-5 scrollbar-hide sm:sticky sm:w-40 ">
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
