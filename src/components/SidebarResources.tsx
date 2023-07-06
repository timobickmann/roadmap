import { AppContext } from "../AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {SiTailwindcss, SiVite, SiDaisyui} from "react-icons/si"


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
                    className="block rounded pl-4 py-2 hover:bg-neutral"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded pl-4 py-2 hover:bg-neutral"
                    to="/roadmap"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded pl-4 py-2 hover:bg-neutral"
                    to="/resources"
                  >
                    Resources
                  </Link>
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="pl-4 py-1 font-bold flex items-center gap-2"><SiVite className="text-primary"/> Vite</p>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/vite/setup"}
                  >
                    Setup
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/vite"}
                  >
                    Resources
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/vite/howtos"}
                  >
                    How-Tos
                  </Link>
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="pl-4 py-1 font-bold flex items-center gap-2"><SiTailwindcss className="text-secondary"/> Tailwind</p>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/tailwind/setup"}
                  >
                    Setup
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/tailwind"}
                  >
                    Resources
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/tailwind/howtos"}
                  >
                    How-Tos
                  </Link>
                </li>
                <li className="mt-3 flex flex-col">
                  <p className="pl-4 py-1 font-bold flex items-center gap-2"><SiDaisyui className="text-accent"/> daisyUI</p>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/daisyui/setup"}
                  >
                    Setup
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/daisyui"}
                  >
                    Resources
                  </Link>

                  <Link
                    className="rounded pl-4 py-2 hover:bg-neutral"
                    onClick={toggleSidebarIsOpened}
                    to={"/resources/daisyui/howtos"}
                  >
                    How-Tos
                  </Link>
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
