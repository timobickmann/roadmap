import { AppContext } from "../AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiTailwindcss, SiVite, SiDaisyui } from "react-icons/si";
import SidebarResourcesItem from "./SidebarResourcesItem";

function SidebarResources() {
  const { sidebarIsOpened, toggleSidebarIsOpened, isMobile } =
    useContext(AppContext);

  return (
    <>
      <div className="flex">
        {(!isMobile || sidebarIsOpened) && (
          <aside className="fixed bottom-0 left-0 top-0 z-40 ml-3 h-screen w-60 overflow-y-scroll bg-base-100 scrollbar-hide sm:sticky sm:w-60">
            <nav>
              <ul className="flex flex-col py-20">
                <li>
                  <Link
                    className="block rounded py-2 pl-4 hover:bg-neutral"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded py-2 pl-4 hover:bg-neutral"
                    to="/roadmap"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded py-2 pl-4 hover:bg-neutral"
                    to="/resources"
                  >
                    Resources
                  </Link>
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="flex items-center gap-2 py-1 pl-4 font-bold">
                    <SiVite className="text-primary" /> Vite
                  </p>
                  <SidebarResourcesItem sidebarItem={"vite"} />
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="flex items-center gap-2 py-1 pl-4 font-bold">
                    <SiTailwindcss className="text-secondary" /> Tailwind
                  </p>
                  <SidebarResourcesItem sidebarItem={"tailwind"} />
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="flex items-center gap-2 py-1 pl-4 font-bold">
                    <SiDaisyui className="text-accent" /> daisyUI
                  </p>
                  <SidebarResourcesItem sidebarItem={"daisyui"} />
                </li>
              </ul>
            </nav>
          </aside>
        )}
        {isMobile && sidebarIsOpened && (
          <div
            onClick={toggleSidebarIsOpened}
            className="fixed z-30 h-screen w-screen bg-black bg-opacity-30"
          ></div>
        )}
      </div>
    </>
  );
}

export default SidebarResources;
