import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isMobile, toggleSidebarIsOpened, setCurrentTheme } =
    useContext(AppContext);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    function handleClickOutsideTheme(event: MouseEvent) {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        detailsRef.current.removeAttribute("open");
      }
    }

    document.addEventListener("click", handleClickOutsideTheme);

    return () => {
      document.removeEventListener("click", handleClickOutsideTheme);
    };
  }, []);

  function handleThemeClick(theme: string) {
    setCurrentTheme(theme);
  }

  function handleLogout() {
    logout();
  }

  return (
    <>
      <menu className="sticky top-0 z-10 mb-10 flex w-full items-center justify-between bg-base-100 px-5 py-2.5 sm:justify-end ">
        <div className="flex items-center gap-5">
          {isMobile && (
            <>
              <button
                onClick={toggleSidebarIsOpened}
                className="text-xl sm:hidden"
              >
                <FaBars />
              </button>
              {/* Logo */}
              <svg
                width={99}
                height={26}
                viewBox="0 2 99 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-base"
                  fill="currentColor"
                  d="M3.264 14.616C3.264 13.32 3.512 12.256 4.008 11.424C4.504 10.592 5.144 9.976 5.928 9.576C6.728 9.16 7.56 8.952 8.424 8.952V11.52C7.688 11.52 6.992 11.624 6.336 11.832C5.696 12.024 5.176 12.344 4.776 12.792C4.376 13.24 4.176 13.832 4.176 14.568L3.264 14.616ZM1.488 21V9H4.176V21H1.488ZM15.7268 21.288C14.5268 21.288 13.4548 21.024 12.5108 20.496C11.5828 19.952 10.8548 19.208 10.3268 18.264C9.79875 17.32 9.53475 16.232 9.53475 15C9.53475 13.768 9.79075 12.68 10.3027 11.736C10.8308 10.792 11.5588 10.056 12.4868 9.528C13.4148 8.984 14.4788 8.712 15.6788 8.712C16.8788 8.712 17.9428 8.984 18.8708 9.528C19.7988 10.056 20.5188 10.792 21.0308 11.736C21.5588 12.68 21.8228 13.768 21.8228 15C21.8228 16.232 21.5668 17.32 21.0547 18.264C20.5428 19.208 19.8228 19.952 18.8948 20.496C17.9668 21.024 16.9108 21.288 15.7268 21.288ZM15.7268 18.816C16.3828 18.816 16.9668 18.656 17.4788 18.336C17.9908 18 18.3908 17.552 18.6788 16.992C18.9668 16.416 19.1108 15.752 19.1108 15C19.1108 14.248 18.9588 13.592 18.6548 13.032C18.3668 12.456 17.9668 12.008 17.4548 11.688C16.9428 11.352 16.3508 11.184 15.6788 11.184C15.0068 11.184 14.4148 11.344 13.9028 11.664C13.3908 11.984 12.9908 12.432 12.7028 13.008C12.4148 13.584 12.2708 14.248 12.2708 15C12.2708 15.752 12.4148 16.416 12.7028 16.992C13.0068 17.552 13.4148 18 13.9268 18.336C14.4548 18.656 15.0548 18.816 15.7268 18.816ZM31.4241 21L31.3041 18.744V14.832C31.3041 14.016 31.2161 13.336 31.0401 12.792C30.8641 12.248 30.5841 11.832 30.2001 11.544C29.8321 11.256 29.3441 11.112 28.7361 11.112C28.1761 11.112 27.6801 11.232 27.2481 11.472C26.8161 11.712 26.4561 12.08 26.1681 12.576L23.7201 11.712C23.9921 11.184 24.3441 10.688 24.7761 10.224C25.2081 9.76 25.7521 9.392 26.4081 9.12C27.0801 8.848 27.8721 8.712 28.7841 8.712C29.9521 8.712 30.9201 8.928 31.6881 9.36C32.4721 9.792 33.0561 10.432 33.4401 11.28C33.8241 12.128 34.0161 13.176 34.0161 14.424L33.9441 21H31.4241ZM28.0161 21.288C26.5761 21.288 25.4561 20.968 24.6561 20.328C23.8721 19.688 23.4801 18.784 23.4801 17.616C23.4801 16.368 23.8961 15.416 24.7281 14.76C25.5761 14.104 26.7521 13.776 28.2561 13.776H31.4721V15.84H29.1201C28.0481 15.84 27.2961 15.992 26.8641 16.296C26.4321 16.584 26.2161 17 26.2161 17.544C26.2161 18.008 26.4001 18.376 26.7681 18.648C27.1521 18.904 27.6801 19.032 28.3521 19.032C28.9441 19.032 29.4561 18.896 29.8881 18.624C30.3361 18.336 30.6801 17.968 30.9201 17.52C31.1761 17.056 31.3041 16.56 31.3041 16.032H32.2881C32.2881 17.664 31.9361 18.952 31.2321 19.896C30.5441 20.824 29.4721 21.288 28.0161 21.288ZM45.402 21L45.282 18.768V4.2H47.946V21H45.402ZM41.49 21.288C40.402 21.288 39.45 21.032 38.634 20.52C37.834 19.992 37.202 19.256 36.738 18.312C36.29 17.368 36.066 16.264 36.066 15C36.066 13.72 36.29 12.616 36.738 11.688C37.202 10.744 37.834 10.016 38.634 9.504C39.45 8.976 40.402 8.712 41.49 8.712C42.498 8.712 43.362 8.976 44.082 9.504C44.818 10.016 45.378 10.744 45.762 11.688C46.146 12.616 46.338 13.72 46.338 15C46.338 16.264 46.146 17.368 45.762 18.312C45.378 19.256 44.818 19.992 44.082 20.52C43.362 21.032 42.498 21.288 41.49 21.288ZM42.162 18.84C42.77 18.84 43.306 18.68 43.77 18.36C44.25 18.024 44.618 17.568 44.874 16.992C45.146 16.416 45.282 15.752 45.282 15C45.282 14.248 45.146 13.584 44.874 13.008C44.618 12.432 44.25 11.984 43.77 11.664C43.306 11.344 42.762 11.184 42.138 11.184C41.498 11.184 40.93 11.344 40.434 11.664C39.938 11.984 39.546 12.432 39.258 13.008C38.986 13.584 38.842 14.248 38.826 15C38.842 15.752 38.986 16.416 39.258 16.992C39.546 17.568 39.938 18.024 40.434 18.36C40.946 18.68 41.522 18.84 42.162 18.84Z"
                />
                <path
                  className="text-accent"
                  fill="currentColor"
                  d="M50.8786 21V9H53.3986L53.5666 11.208V21H50.8786ZM59.0146 21V14.856L61.7026 14.136V21H59.0146ZM67.1746 21V14.856L69.8386 14.136V21H67.1746ZM59.0146 14.856C59.0146 13.896 58.9026 13.16 58.6786 12.648C58.4706 12.12 58.1666 11.752 57.7666 11.544C57.3826 11.336 56.9266 11.232 56.3986 11.232C55.5026 11.216 54.8066 11.512 54.3106 12.12C53.8146 12.728 53.5666 13.6 53.5666 14.736H52.5586C52.5586 13.472 52.7426 12.392 53.1106 11.496C53.4786 10.584 54.0066 9.896 54.6946 9.432C55.3826 8.952 56.1986 8.712 57.1426 8.712C58.5986 8.712 59.7186 9.16 60.5026 10.056C61.3026 10.936 61.7026 12.296 61.7026 14.136L59.0146 14.856ZM67.1746 14.856C67.1746 13.896 67.0626 13.16 66.8386 12.648C66.6146 12.12 66.3026 11.752 65.9026 11.544C65.5186 11.336 65.0706 11.232 64.5586 11.232C63.6466 11.216 62.9426 11.512 62.4466 12.12C61.9506 12.728 61.7026 13.6 61.7026 14.736H60.6946C60.6946 13.472 60.8786 12.392 61.2466 11.496C61.6146 10.584 62.1426 9.896 62.8306 9.432C63.5186 8.952 64.3346 8.712 65.2786 8.712C66.7346 8.712 67.8626 9.16 68.6626 10.056C69.4626 10.936 69.8546 12.296 69.8386 14.136L67.1746 14.856ZM79.8538 21L79.7338 18.744V14.832C79.7338 14.016 79.6458 13.336 79.4698 12.792C79.2938 12.248 79.0138 11.832 78.6298 11.544C78.2618 11.256 77.7738 11.112 77.1658 11.112C76.6058 11.112 76.1098 11.232 75.6778 11.472C75.2458 11.712 74.8858 12.08 74.5978 12.576L72.1498 11.712C72.4218 11.184 72.7738 10.688 73.2058 10.224C73.6378 9.76 74.1818 9.392 74.8378 9.12C75.5098 8.848 76.3018 8.712 77.2138 8.712C78.3818 8.712 79.3498 8.928 80.1178 9.36C80.9018 9.792 81.4858 10.432 81.8698 11.28C82.2538 12.128 82.4458 13.176 82.4458 14.424L82.3738 21H79.8538ZM76.4458 21.288C75.0058 21.288 73.8858 20.968 73.0858 20.328C72.3018 19.688 71.9098 18.784 71.9098 17.616C71.9098 16.368 72.3258 15.416 73.1578 14.76C74.0058 14.104 75.1818 13.776 76.6858 13.776H79.9018V15.84H77.5498C76.4778 15.84 75.7258 15.992 75.2938 16.296C74.8618 16.584 74.6458 17 74.6458 17.544C74.6458 18.008 74.8298 18.376 75.1978 18.648C75.5818 18.904 76.1098 19.032 76.7818 19.032C77.3738 19.032 77.8858 18.896 78.3178 18.624C78.7658 18.336 79.1098 17.968 79.3498 17.52C79.6058 17.056 79.7338 16.56 79.7338 16.032H80.7178C80.7178 17.664 80.3658 18.952 79.6618 19.896C78.9738 20.824 77.9018 21.288 76.4458 21.288ZM85.2877 25.8V9H87.8077L87.9757 11.208V25.8H85.2877ZM91.7677 21.288C90.7597 21.288 89.8877 21.032 89.1517 20.52C88.4317 19.992 87.8797 19.256 87.4957 18.312C87.1117 17.368 86.9197 16.264 86.9197 15C86.9197 13.72 87.1117 12.616 87.4957 11.688C87.8797 10.744 88.4317 10.016 89.1517 9.504C89.8877 8.976 90.7597 8.712 91.7677 8.712C92.8557 8.712 93.7997 8.976 94.5997 9.504C95.4157 10.016 96.0477 10.744 96.4957 11.688C96.9597 12.616 97.1917 13.72 97.1917 15C97.1917 16.264 96.9597 17.368 96.4957 18.312C96.0477 19.256 95.4157 19.992 94.5997 20.52C93.7997 21.032 92.8557 21.288 91.7677 21.288ZM91.0957 18.84C91.7357 18.84 92.3037 18.68 92.7997 18.36C93.2957 18.024 93.6877 17.568 93.9757 16.992C94.2797 16.416 94.4317 15.752 94.4317 15C94.4317 14.248 94.2877 13.584 93.9997 13.008C93.7277 12.432 93.3437 11.984 92.8477 11.664C92.3517 11.344 91.7757 11.184 91.1197 11.184C90.5117 11.184 89.9677 11.344 89.4877 11.664C89.0077 11.984 88.6317 12.432 88.3597 13.008C88.1037 13.584 87.9757 14.248 87.9757 15C87.9757 15.752 88.1037 16.416 88.3597 16.992C88.6317 17.568 88.9997 18.024 89.4637 18.36C89.9437 18.68 90.4877 18.84 91.0957 18.84Z"
                />
              </svg>
            </>
          )}
        </div>

        <ul className="flex items-center gap-5">
          {user && (
            <>
              <li className="">{user.email}</li>
              <li className="rounded  px-4 py-1 hover:bg-neutral hover:text-neutral-content">
                <button onClick={handleLogout}>Log-Out</button>
              </li>
            </>
          )}
          {!user && (
            <>
              <li className="rounded  px-4 py-1 hover:bg-neutral hover:text-neutral-content">
                <NavLink to="/signup">Sign-Up</NavLink>
              </li>
              <li className="rounded  px-4 py-1 hover:bg-neutral hover:text-neutral-content">
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}

          <li>
            <details ref={detailsRef}>
              <summary className="cursor-pointer list-none rounded  px-4 py-1 hover:bg-neutral hover:text-neutral-content">
                Theme
              </summary>
              <ul className="absolute right-5 mt-2 flex gap-5 rounded bg-base-200 px-3 py-2">
                <li>
                  <ul className="flex flex-col gap-2">
                    <li className="border-b-2 border-b-base-content">Dark</li>
                    <li>
                      <button
                        data-theme="dark"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("dark")}
                      >
                        Dark
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="business"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("business")}
                      >
                        Business
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="synthwave"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("synthwave")}
                      >
                        Synthwave
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="halloween"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("halloween")}
                      >
                        Hallowen
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="forest"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("forest")}
                      >
                        Forest
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="dracula"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("dracula")}
                      >
                        Dracula
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="night"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("night")}
                      >
                        Night
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="coffee"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("coffee")}
                      >
                        Coffee
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="flex flex-col gap-2">
                    <li className="border-b-2 border-b-base-content">Light</li>
                    <li>
                      <button
                        data-theme="autumn"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("autumn")}
                      >
                        Autumn
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="wireframe"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("wireframe")}
                      >
                        Wireframe
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="lofi"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("lofi")}
                      >
                        Lofi
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="garden"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("garden")}
                      >
                        Garden
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="retro"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("retro")}
                      >
                        Retro
                      </button>
                    </li>
                    <li>
                      <button
                        data-theme="cupcake"
                        className="w-full rounded px-5 py-2 text-left hover:bg-neutral hover:text-neutral-content"
                        onClick={() => handleThemeClick("cupcake")}
                      >
                        Cupcake
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </details>
          </li>
          <li className="flex items-center">
            <a
              className="hover:text-primary-focus"
              target="_blank"
              href="https://github.com/timobickmann/roadmap"
            >
              <SiGithub />
            </a>
          </li>
        </ul>
      </menu>
    </>
  );
}

export default Header;
